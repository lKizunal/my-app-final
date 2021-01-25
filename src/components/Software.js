import React, { Component } from 'react';
import { Container, Jumbotron, Figure, Row, Button, ButtonToolbar } from 'react-bootstrap';
import StarRating from './StarRating';

function Software() {
    return (
        <Container>
            <h1>Software</h1>
            <Jumbotron>
                <Row>
                    <ButtonToolbar>
                        <Figure>
                            <Figure.Image
                                width={300}
                                height={300}
                                alt="300x300"
                                src="./assets/msoffice.jpg"
                            />
                            <Figure.Caption>
                                <h2><a style={{ color: "gray" }}>MS Office Home & Business 2013</a></h2>
                                <h5>Reviews:</h5>
                                <StarRating />
                                <h5>The Newest from office</h5>
                                <p>Office Home & Business 2013 is designed to help you create and communicate faster with new, time-saving features and a clean, modern look. Plus, you can save your documents in the cloud on SkyDrive and access them virtually anywhere.
                                    The latest versions of Word, Excel, PowerPoint, OneNote plus Outlook on 1 PC.

                                <h5>Includes:</h5>
                                    <p>* The latest versions of Word, Excel, PowerPoint, OneNote, and Outlook.<br />
                                        * Office on one PC for business and household use.<br />
                                        * For 1 PC Only.<br />
                                        * 7 GB of online storage in SkyDrive.<br />
                                        * Free Office Web Apps1 for accessing, editing,<br />
                                        * and sharing documents.<br />
                                        * An improved user interface optimised for touch, pen, and keyboard.<br />
                                    </p>

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
export default Software