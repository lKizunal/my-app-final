import React from 'react';
import styled from 'styled-components';

function Footer() {

    const FooterContainer = styled.footer`
.footer-middle {
    background: #2f2f2f;
    padding-top: 3rem;  
}
.footer-bottom {
    padding-top: 2rem;
    padding-bottom: 1rem;
}
`;

    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6" style={{color:'white'}}>
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled" >
                            <li>Address: STI Academic Center, P. Tuazon Boulevard corner 5th Avenue, Cubao, Quezon City, 1109 Metro Manila</li>
                            <li>Contact No.: 09224826348</li>
                            <li>Telephone No.: 8421-1029</li>
                            <li>Email Address: iZone@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4 style={{color:'white'}}>About Us</h4>
                            <ul className="list-unstyled" >
                                <li><a style={{color:'white'} }href="/mission">Mission</a></li>
                                <li><a style={{color:'white'}} href="/vision">Vision</a></li>
                                <li><a style={{color:'white'}} href="/itprofile">Professional IT Profiles</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center" style={{color:'white'}}>
                            &copy;{new Date().getFullYear()} City Service Website - All Rights Reserved
                    </p>
                    </div>
                </div>
            </div>
        </FooterContainer>

    );
}

export default Footer

