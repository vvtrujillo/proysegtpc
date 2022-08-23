import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import { Button } from "reactstrap";
import FormRespuestasCam from "./FormRespuestasCam";
import axios from "axios";
import Swal from "sweetalert2";


const MaestrosMain = () => {

    const [datosResp, setDatosResp] = useState([]);    

    const Eliminar = (respuesta, id) => {
        Swal.fire({title:'Eliminar', //Aca colocamos el titulo del mensaje
                  text:`Esta seguro de eliminar la respuesta ${respuesta}`, //acá colocamos el texto que va a decir en el mensaje
                  icon:'question', //aca indicamos el icono del mensaje
                  showCancelButton: true, //indicamos si vamos a mostrar el boton "Cancelar" en el mensaje
                  confirmButtonText: 'Si, Eliminar', //Texto del boton confirmar la acción del mensaje
                  confirmButtonColor: '#DF362D'
                })
                .then(resp => {
                  if(resp.isConfirmed){
                    console.log('dije si al eliminar');
                    console.log('eliminar',respuesta, id)
                    axios.delete(`http://localhost:8000/api/v1/respcaminatas/${id}`)
                      .then(resp =>{
                        console.log('respuesta',resp)
                        setDatosResp(datosResp.filter(d => d._id != id))
                      }).catch(error => Swal.fire('Ooops!!!', error,'Error'))
                  }
                })
      }

    //Traemos los datos de respuestas de las caminatas
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/respcaminatas')
        .then(resp => {
            if(!resp.data.error){
            setDatosResp(resp.data.datosRespCaminata)
            }else{
            Swal.fire('Ooops!!!', resp.data.mensaje, 'error');
            }
        })
    }, [])


    const guardarRespuesta = (obj) => {

        return axios.post('http://localhost:8000/api/v1/respcaminatas', obj)
          .then(resp => {
            if(!resp.data.error){
              setDatosResp([...datosResp, resp.data.datosRespCaminata]);
              Swal.fire('','Se ha guardado con éxito la respuesta.','success');
              return true;
            }else{
              Swal.fire('','No pudimos crear jugador', 'error');
              return false;
            }        
          })
      }

    return(
        <React.Fragment>
            <Link to={'./Respuestas'}>Editar Respuestas</Link>
            <Routes>
                <Route path='Respuestas' element={<FormRespuestasCam datosResp={datosResp}
                                                                     guardarRespuestaFn={guardarRespuesta}
                                                                     EliminarFn={Eliminar}>
                                                   </FormRespuestasCam>}></Route>
            </Routes>
        </React.Fragment>
    )
}

export default MaestrosMain;