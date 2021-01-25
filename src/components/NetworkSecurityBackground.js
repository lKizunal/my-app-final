import React, { Component } from 'react';
import { Container, Jumbotron, Figure, Form, Button, Row, Col } from 'react-bootstrap';
import StarRating from './StarRating';

class NetworkSecurityBackground extends Component {
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
                        <h3>Profile Summary</h3>
                        <p>* Experience in configuring, installing & maintining Checkpoint, Juniper, & Cisco ASA Firewalls<br/>
                        * Delivered Firewall development Security project<br/>
                        * Implementation Checkpoint Firewall standalone & distributed environment<br/>
                        * Day to day operational changes & incidents<br/>
                        * Having experience on Firewall migration project<br/>
                        </p>
                        <h3>Technical Skills</h3>
                        <p>* Firewall: Checkpoint, Cisco, Juniper<br/>
                        * Checkpoint: Firewall, Management Server<br/>
                        * Cisco: ASA, ASDM<br/>
                        * Juniper: SRX Firewall<br/>
                        </p> 
                    </Col>
                    <Col>
                    <h3>Experience</h3>
                    <h4>Network Security Engineer</h4>
                    <p>* Managed a medium-sized office network of 5 Cisco routers, 30 switches and more than 200 individual computers<br/>
                    * Configured and managed Cisco Umbrella, Email security and Web security to prevent employees interacting with malicious content through the company network<br/>
                    * Configured Firepower NGFW to block attacks and intrusion attempts<br/>
                    * Collaborated with network engineers and application developers to optimize the network and remove vulnerabilities in minimal time frames.<br/></p>
                    <h3>Cyber Security Engineer</h3>
                    <p>* Consulted cyber security in a financialservices firm<br/>
                    * Performed penetration testing and reported to higher management<br/>
                    * Optimized security system performance and reduced load on the network<br/>
                    * Coordinated with network engineers for implementing solutions<br/></p>
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
export default NetworkSecurityBackground