import React, { Component } from 'react';
import { Container, Jumbotron, Figure, Row, Button, ButtonToolbar } from 'react-bootstrap';
import StarRating from './StarRating';

function Monitor() {
    return (
        <Container>
            <h1>Monitor</h1>
            <Jumbotron>
                <Row>
                    <ButtonToolbar>
                        <Figure>
                            <Figure.Image
                                width={300}
                                height={300}
                                alt="300x300"
                                src="./assets/monitor.jpg"
                            />
                            <Figure.Caption>
                                <h2 style={{ color: "gray" }}>Hanns.G HE195ANB 47 cm (18.5") WXGA LED LCD Monitor</h2>
                                <h5>Reviews:</h5>
                                <StarRating />
                                <h5>Description:</h5>
                                <p>Hanns.G HE195ANB 47 cm (18.5") WXGA LED LCD Monitor - 16:9 - Glossy Black - 1366 x 768 - 16.7 Million Colours - 200 cd/m² - 5 ms - 60 Hz Refresh Rate - VGA<br/>
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
export default Monitor