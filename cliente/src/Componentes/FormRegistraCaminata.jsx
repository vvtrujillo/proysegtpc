import React from "react";
import { useState } from "react";
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';

const FormRegistraCaminata = ({datosAreas, datosResp}) => {

    const [formulario, setFormulario] = useState([])

    const handleDropdownChange = (e) =>{
        console.log('evento change', e.target.value);
        setFormulario({[e.target.name]:e.target.value})
    }

    const grabaCaminata = async e => {
        e.preventDefault();
        //Aca debo grabar la caminata

        console.log('datos para grabar', formulario);
    }    

    return(
        <React.Fragment>
            <Container mt-5>
                <Form onSubmit={grabaCaminata}>
                    <h1>Registra Caminata</h1>
                    <FormGroup>
                        <Label sm={2}>Área Evaluada</Label>
                        <Input type="select" onChange={handleDropdownChange}>
                            {
                                datosAreas.map((area,i) => 
                                <option>{area.nombreArea}</option>
                                )
                            }
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>¿Conoce los lineamientos de seguridad de la organización?</Label>
                        <Input type="select" onChange={handleDropdownChange}>
                            {
                                datosResp.map((respuesta) =>
                                <option>{respuesta.respuesta}</option>
                                )
                            }
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>¿La actividad ejecutada, está documentada, a través de un procedimiento de trabajo o instructivo?</Label>
                        <Input type="select" onChange={handleDropdownChange}>
                            {
                                datosResp.map((respuesta,i) =>
                                <option>{respuesta.respuesta}</option>
                                )
                            }
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>¿Conoce los riesgos críticos asociados a la actividad?</Label>
                        <Input type="select" onChange={handleDropdownChange}>
                            {
                                datosResp.map((respuesta,i) =>
                                <option>{respuesta.respuesta}</option>
                                )
                            }
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>¿Participa en el análisis de la ART?</Label>
                        <Input type="select" onChange={handleDropdownChange}>
                            {
                                datosResp.map((respuesta,i) =>
                                <option>{respuesta.respuesta}</option>
                                )
                            }
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>¿Se considera el aseo y orden dentro de la planificación de la faena?</Label>
                        <Input type="select" onChange={handleDropdownChange}>
                            {
                                datosResp.map((respuesta,i) =>
                                <option>{respuesta.respuesta}</option>
                                )
                            }
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col><Button color="primary">Tomar Foto</Button></Col>
                            <Col><Button color="primary">Cargar Foto</Button></Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label>Comentarios Generales</Label>
                        <Input type="textarea" 
                               maxLength={255}
                               onChange={handleDropdownChange}                               
                        />
                        <p>Contador de caracteres acá</p>
                    </FormGroup>
                    <Button type="submit" color="primary" className="container">Grabar</Button>
                </Form>
            </Container>            
        </React.Fragment>
    )
}

export default FormRegistraCaminata;