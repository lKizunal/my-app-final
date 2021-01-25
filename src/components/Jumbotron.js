import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import background from '../components/background.jpg'
import image from '../components/image.png'

const Styles = styled.div`
.jumbo{
    background: url(${background}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
}

.overlay{
    background: url(${image}) no-repeat top;
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;


export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay">
                <Container>
                    <h1>Welcome</h1>
                    <p>We offer any kinds of IT services</p>
                </Container>
            </div>
        </Jumbo>
    </Styles>
)
export default Jumbotron