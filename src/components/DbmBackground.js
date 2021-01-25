import React, { Component } from 'react';
import { Container, Jumbotron, Figure, Form, Button, Row, Col } from 'react-bootstrap';
import StarRating from './StarRating';

class DbmBackground extends Component {
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
                            <h3>Skills</h3>
                            <p>* Microsoft Certified Database Administrator.<br />
                                * Oracle Certified Database Administrator.<br />
                                * Bachelor of Science Degree; Management Information Systems.<br />
                                * 7 years work experience.<br />
                                * Adept at analyzing high-level data.<br />
                                * Logical Thinker; transforms code into logical patterns.<br />
                                * Problem Solver; articulates potential concerns and creates solutions before they become problems.<br />
                                * Meticulous; approaches database administration keeping in mind minute attention to detail.<br />
                            </p>
                            <h3>Certifications</h3>
                            <p>* Microsoft Certified Database Administrator.<br />
                            * Oracle Certified Database Administrator<br />
                            </p>
                        </Col>
                        <Col>
                            <h3>Work Experience</h3>
                            <h5>Database Administrator</h5>
                            <p>XXX Company</p>
                            <p>* Provides database administration support to projects that are assigned by Burlington.<br />
                            * Lends technical assistance to project team members and database administrators.<br />
                            * Troubleshoots company’s and subsidiaries’ database issues and applications.<br />
                            * Performs the following database administration tasks such as DBMS installations and upgrades, migrating databases, changing server configuration parameters, transferring system databases and managing users and logins.<br />
                            * Develops, tests and institutes SQL scripts as required by Burlington’s projects.<br />
                            * Prioritizes assigned tasks and ensures these are completed on or before the scheduled date of completion.<br />
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
export default DbmBackground
