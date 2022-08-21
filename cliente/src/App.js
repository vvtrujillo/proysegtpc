import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import {Container} from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import FormRegistraCaminata from './Componentes/FormRegistraCaminata';
import React from 'react';

function App() {

  //const [datos, setDatos] = useState([]);
  const [datosAreas, setDatosAreas] = useState([]);
  const [datosResp, setDatosResp] = useState([]);


  //Traemos los datos de las áreas de TPC
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/maestros/areastpc')
      .then(resp => {
        if(!resp.data.error){
          setDatosAreas(resp.data.datosAreasTpc)
        }else{
          Swal.fire('Ooops!!!', resp.data.mensaje, 'error');
        }
      })
  }, [])

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


  return (
    <Container>
      <Link to={'/registracaminata'}>Registrar Caminata</Link>
      <Routes>
        <Route path='registracaminata' element={<FormRegistraCaminata datosAreas={datosAreas} datosResp={datosResp}/>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
