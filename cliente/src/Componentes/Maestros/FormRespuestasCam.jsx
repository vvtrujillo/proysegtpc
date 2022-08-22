import React from "react";
import { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label, Table } from "reactstrap";

const estadoInicial = {
    respuesta:''
}

const FormRespuestasCam = ({datosResp, CrearRespuesta}) => {

    const [formulario, setFormulario] = useState([estadoInicial]);

    const actualizarFormulario = ({target: {name, value}}) => {
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    const guardar = e => {
        e.preventDefault();
        
        let resp = await CrearRespuesta(formulario);
        setFormulario(estadoInicial);        
    }

    return(
        <React.Fragment>
            <Container>
                <Form onSubmit={guardar}>
                    <h1>Agregar nueva Respuesta</h1>
                    <FormGroup>
                        <Label nombre='respuesta'>Respuesta</Label>
                        <Input nombre='respuesta' placeholder="Respuesta..." onChange={actualizarFormulario}></Input>
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
                                        <Button color='danger'>Eliminar</Button>                                        
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