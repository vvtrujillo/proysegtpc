import React from "react";
import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';

const FormRegistraCaminata = ({datosAreas, datosResp}) => {

    const grabaCaminata = async e => {
        e.preventDefault();
        //Aca debo grabar la caminata
    }

    return(
        <React.Fragment>
            <Form onSubmit={grabaCaminata}>
                <h1 className="container">Registra Caminata</h1>
                <FormGroup row>
                    <Label sm={2}>Área Evaluada</Label>
                    <Input type="select">
                        {
                            datosAreas.map((area,i) => 
                            <option>{area.nombreArea}</option>
                            )
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>¿Conoce los lineamientos de seguridad de la organización?</Label>
                    <Input type="select">
                        {
                            datosResp.map((respuesta,i) =>
                            <option>{respuesta.respuesta}</option>
                            )
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>¿La actividad ejecutada, está documentada, a través de un procedimiento de trabajo o instructivo?</Label>
                    <Input type="select">
                        {
                            datosResp.map((respuesta,i) =>
                            <option>{respuesta.respuesta}</option>
                            )
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>¿Conoce los riesgos críticos asociados a la actividad?</Label>
                    <Input type="select">
                        {
                            datosResp.map((respuesta,i) =>
                            <option>{respuesta.respuesta}</option>
                            )
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>¿Participa en el análisis de la ART?</Label>
                    <Input type="select">
                        {
                            datosResp.map((respuesta,i) =>
                            <option>{respuesta.respuesta}</option>
                            )
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>¿Se considera el aseo y orden dentro de la planificación de la faena?</Label>
                    <Input type="select">
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
                    <Input type="textarea" maxLength={255}></Input>
                    agregar contador de caracteres
                </FormGroup>
                <Button type="submit" color="primary" className="container">Grabar</Button>
            </Form>
        </React.Fragment>
    )
}

export default FormRegistraCaminata;