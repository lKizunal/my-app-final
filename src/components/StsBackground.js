import React, { Component } from 'react';
import { Container, Jumbotron, Figure, Form, Button, Row, Col } from 'react-bootstrap';
import StarRating from './StarRating';

class StsBackground extends Component {
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
                            <h2>Background</h2>
                            <h3>Profile Summary</h3>
                            <p>* Remarkable experience in technical support and customer service to complex software applications<br />
                                * Familiarity with PC & Web-based software applications, Windows 2003/2008, XP/Vista operating systems<br />
                                * Proficient with Microsoft Office products , Microsoft SQL Server, Oracle, and IBM DB2<br />
                                * Strong technical and excellent organizational and time management skills<br />
                                * Superior software application installation and troubleshooting skills<br />
                                * Excellent communication time management skills<br />
                                * Highly motivated to achieve client satisfaction<br />
                                * Profound ability to interpret, analyze and troubleshoot technical problems<br />
                                * Proven ability to prioritize and manage multiple tasks simultaneously<br />
                            </p>
                            <h3>Experience</h3>
                            <h6>Software Support</h6>
                            <h6>XXX Company</h6>
                            <p>* Conducted research and troubleshot complex and advanced inquiries.<br />
                            * Interacted with external clients and teams to carry out client-specific responsibilities.<br />
                            * Monitored the effectiveness of problem resolution.<br />
                            * Assisted with software implementation work.<br />
                            * Interacted with database administrators to identify and correct issues.<br />
                            </p>
                        </Col>
                        <Col>
                            <h3>Skills</h3>
                            <p>* Broad knowledge of loan origination products and related services; in-depth knowledge of products and services for which team(s) provide support<br />
                                * Highly organized and able to multi-task under time constraints<br />
                                * Working knowledge of workforce management practices and tools (e.g., scheduling software, quality monitoring software)<br />
                                * Knowledge of basic IT technologies (i.e. databases, operating systems, network devices, software development and architecture)<br />
                                * Excellent decision-making, problem-solving, team building, negotiation, conflict management, and time management skills<br />
                                * Excellent customer service skills that build high levels of customer satisfaction for internal and external clients<br />
                                * Demonstrated ability to “thought” lead and implement change<br />
                                * Willingly shares relevant technical and/or industry knowledge and exper<br />
                            </p>
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
export default StsBackground