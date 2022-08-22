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
                if(resp.data.error){
                    setDatosResp([...datosResp, resp.data.datosRespCaminata]);
                    Swal.fire('','Se ha creado la respuesta','success');
                    return true;
                }else{
                    Swal.fire('','No pudimos crear la respuesta', 'error');
                    return false;
                    }                
            })
    }

    return(
        <React.Fragment>
            <Link to={'./Respuestas'}>Editar Respuestas</Link>
            <Routes>
                <Route path='Respuestas' element={<FormRespuestasCam datosResp={datosResp} CrearRespuesta={guardarRespuesta}></FormRespuestasCam>}></Route>
            </Routes>
        </React.Fragment>
    )
}

export default MaestrosMain;