import React from 'react'

import { Table, Col, Row, Container } from 'react-bootstrap'

import PageTitle from '../../components/PageTitle'
 
export default () => (
    <Container>
        <Col md={12}>
            <Row>
                <PageTitle title="Consultar contas da organização"/> 
            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Email</th>
                            <th scope="col">Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Col>
    </Container>
    
)