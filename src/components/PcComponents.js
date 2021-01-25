import React, { Component } from 'react';
import { Container, Jumbotron,  Figure, Row, Button, ButtonToolbar} from 'react-bootstrap';
import StarRating from './StarRating';

class PcComponents extends Component {
    render() {
        return (
            <Container>
                <h1>PC Components</h1>
                <Jumbotron>
                    <Row>
                        <ButtonToolbar>
                        <Figure>
                            <Figure.Image
                                width={300}
                                height={300}
                                alt="300x300"
                                src="./assets/ace.jpg"
                            />
                            <Figure.Caption>
                                <h2 style={{ color: "gray" }}>ACE 520W PSU</h2>
                                <h5>Reviews:</h5>
                                <StarRating/>
                                <h5>Key Features</h5>
                                <p>* New Version 1.3 / Ver. 2.03<br />
                                    * Cooling: 12cm Fan<br />
                                    * Silent and Better Ventilation<br />
                                    * ATX 12V Compliant for all Types of CPU and Mainboard<br />
                                    * CE Approved<br />
                                    * Input Voltage: 115Vac or 230Vac or 115Vac / 230Vac<br />
                                    * 2 x SATA Connectors<br />
                                    * 3 x Molex Connectors<br />
                                    * 20+4 Pin Motherboard Connector<br />

                                    Price: --
                                </p>
                            </Figure.Caption>
                            <Button href="/itembuy">Buy</Button>
                        </Figure>
                        </ButtonToolbar>
                    </Row>
                </Jumbotron>
            </Container>

        );
    }
}
export default PcComponents