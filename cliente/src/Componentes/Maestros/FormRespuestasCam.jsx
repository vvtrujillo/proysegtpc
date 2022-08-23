import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label, Table } from "reactstrap";
import axios from "axios";

const estadoInicial = {
    respuesta:''
}

const FormRespuestasCam = ({datosResp, guardarRespuestaFn, EliminarFn}) => {

    const [formulario, setFormulario] = useState(estadoInicial);

    const navigate = useNavigate();

    const {id} = useParams();

    const actualizarFormulario = ({target: {name, value}}) => {
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    const guardar = async e => {
        e.preventDefault();
        let respuesta=false;

        if(!id){
            respuesta = await guardarRespuestaFn(formulario);            
            setFormulario(estadoInicial);
        } else {
           //Aca debo actualizar
        }

        if(respuesta){            
            navigate('/Maestros/Respuestas');
        }
               
    }

    return(
        <React.Fragment>
            <Container>
                <Form onSubmit={guardar}>
                    <h1>Agregar nueva Respuesta</h1>
                    <FormGroup>
                        <Label name='respuesta'>Respuesta</Label>
                        <Input name='respuesta'
                               type='text'
                               placeholder="Respuesta..."                               
                               onChange={actualizarFormulario}
                               required>                               
                        </Input>
                    </FormGroup>
                    <Button type="submit" color="primary">Grabar Respuesta</Button>
                    <hr></hr>                    
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <td>Respuesta</td>
                                <td>Acción</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datosResp.map((respuesta,i) => 
                                <tr key={i}>
                                    <td>{respuesta.respuesta}</td>
                                    <td>
                                        <Button color='primary'>Editar</Button>
                                        <Button
                                            color='danger'
                                            onClick={e => EliminarFn(respuesta.respuesta, respuesta._id)}
                                            >
                                            Eliminar
                                        </Button>                                        
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Form>
            </Container>
        </React.Fragment>
    )
}

export default FormRespuestasCam;