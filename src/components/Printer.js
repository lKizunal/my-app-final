import React, { Component } from 'react';
import { Container, Jumbotron, Figure, Row, Button, ButtonToolbar } from 'react-bootstrap';
import StarRating from './StarRating';

function Printer() {
    return (
        <Container>
            <h1>Printer</h1>
            <Jumbotron>
                <Row>
                    <ButtonToolbar>
                        <Figure>
                            <Figure.Image
                                width={300}
                                height={300}
                                alt="300x300"
                                src="./assets/printer.jpg"
                            />
                            <Figure.Caption>
                                <h2 style={{ color: "gray" }}>Epson EcoTank ET-2600 Multi-Function</h2>
                                <h5>Reviews:</h5>
                                <StarRating />
                                <h5>Description:</h5>
                                <p>Epson's cartridge-free EcoTank with print,copy and scan features,provides a great choice for busy households. This 3-in-1 inkjet can reduce printing costs.<br/>

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
export default Printer