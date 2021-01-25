import React, { Component } from 'react';
import { Container, Jumbotron, Figure, Form, Button, Row, Col } from 'react-bootstrap';
import StarRating from './StarRating';

class NetworkSetupBackground extends Component {
    render() {
        return (
            <Container>

                <Jumbotron>
                    <Row className="justify-content-md-center">
                        <Figure>
                            <Figure.Image
                                width={200}
                                height={200}
                                src="./assets/profile.png"
                            />
                            <Figure.Caption>
                                <h2>NAME</h2>
                                <p>Rate</p>
                                <StarRating />
                            </Figure.Caption>
                        </Figure>
                    </Row>
                    <Row>
                        <Col>
                    <h2>Background:</h2>
                    <h3>Key Skills</h3>
                    <p>* Sound knowledge of various operating systems.<br/>
                    * Good knowledge of all the hardware devices and their management.<br/>
                    * Sound knowledge of Network management.<br/>
                    * Good analytical skills.<br/>
                    * Self motivated.<br/>
                    * Strong verbal and communication skills.<br/>
                    * Problem analysis and solving skills.<br/>
                    * Flexible to work in all conditions.<br/></p>
                    <h3>Key Learning</h3>
                    <p>* Learn to manage the servers, PCs, routers and switches.<br/>
                    * To learn about the troubleshooting problems of computer hardware devices.<br/>
                    * To learn about the network processing.<br/>
                    * Installation and configuration in the systems.<br/>
                    * Responsible for computer assembling.<br/></p>
                    </Col>
                    <Col>
                    <h2>Educational Background</h2>
                    <p>* B.Sc. with computer specialization from XXXXX College in year XXXX with XX %.<br/>
                    * Senior secondary passed from XXXXX School in year XXXX with XX %.<br/>
                    * High school passed from XXXX School in year XXXX with XX %.<br/></p>
                    <h3>Certification Course</h3>
                    <p>Diploma in hardware and networking from XXXX institute in year XXXX with X grade.</p>
                    <h3>Training Undertaken</h3>
                    <p>45 days training from XXXX Company on Hardware and Networking.</p>
                    </Col>
                    </Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Feedback:</Form.Label>
                        <Form.Control as="textarea" placeholder="Write comment" rows="3" />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Jumbotron>
            </Container>

        );
    }
}
export default NetworkSetupBackground