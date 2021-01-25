import React, { Component } from 'react'
import { Jumbotron, Container, Row, Figure } from 'react-bootstrap'


class Home extends Component {
    render() {
        return (
            <Container className="App">

                <Row>
                    <Jumbotron>
                        <Figure>
                            <Figure.Image
                                width={300}
                                height={300}
                                alt="300x300"
                                src="./assets/networksetup.jpg"
                            />
                            <Figure.Caption>
                                <h2><a style={{color:"gray"}}href="/transaction">Network Setup</a></h2>
                                <p>The Network Setup Service managesthe installation of network drivers and permits the configuration of low-level network settings. If this service is stopped, any driver installations that are in-progress may be cancelled.</p>
                            </Figure.Caption>
                        </Figure>
                    </Jumbotron>

                    <Jumbotron>
                        <Figure>
                            <Figure.Image
                                width={300}
                                height={300}
                                alt="300x300"
                                src="./assets/networksecurity.jpg"
                            />
                            <Figure.Caption>
                                <h2><a style={{color:"gray"}}href="/transaction">Network Security</a></h2>
                                <p>Cybersecurity is a major concern for all businesses. So evaluating and responding to potential threats is a popular service for a lot of IT businesses. IT Secure offers this as one of the services in its managed IT offerings. But some businesses also offer it as a separate service.</p>
                            </Figure.Caption>
                        </Figure>
                    </Jumbotron>

                    <Jumbotron>
                        <Figure>
                            <Figure.Image
                                width={300}
                                height={300}
                                alt="300x300"
                                src="./assets/database.jpg"
                            />
                            <Figure.Caption>
                                <h2><a style={{color:"gray"}}href="/transaction">Database Management</a></h2>
                                <p>A database is the system that a business uses to monitor and access its data throughout the lifecycle. It would include things like customer and employee information, sales and finances. Database management includes organizing that data to ensure compliance, security and performance of data-driven applications.</p>
                            </Figure.Caption>
                        </Figure>
                    </Jumbotron>
                    
                    <Jumbotron>
                        <Figure>
                            <Figure.Image
                                width={300}
                                height={300}
                                alt="300x300"
                                src="./assets/softwaresupport.jpg"
                            />
                            <Figure.Caption>
                                <h2><a style={{color:"gray"}}href="/transaction">Software Support</a></h2>
                                <p>If you enjoy dealing with software products like those that run databases, spreadsheets or multimedia, you can offer a service where you provide support for users that are in need of technical fixes. You can focus on a specific type of software or list of programs, or offer a more generalized service.</p>
                            </Figure.Caption>
                        </Figure>
                    </Jumbotron>
                </Row>
            </Container>
            //         <div>
            //         <img className="image"img src={image}>
            //   </img>
            //   <Greet name="Welcome"/>
            //   <p style={{color: '#80ff00' }}>We offers any kinds of IT services</p>
            //   <Greet network = "Network Setup"/>
            //   <img className="image1" img src={network}></img>
            //   <p style={{color: 'lightgreen',position:'relative', right:'6cm', bottom:'7cm' }}>
            //   The Network Setup Service manages <br/>the installation of network drivers and<br/>
            //   permits the configuration of low-level <br/>network settings. If this service is stopped,<br/>
            //   any driver installations that are in-progress<br/> may be cancelled..</p>
            //   </div>
        );
    }
}

export default Home