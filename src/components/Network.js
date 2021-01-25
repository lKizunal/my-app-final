import React, { Component } from 'react';
import { Container, Jumbotron, Figure, Row, Button, ButtonToolbar } from 'react-bootstrap';
import StarRating from './StarRating';

class Network extends Component {
    render() {
        return (

            <Container>
                <h1>Network</h1>
                <Jumbotron>
                    <Row>
                        <ButtonToolbar>
                            <Figure>
                                <Figure.Image
                                    width={300}
                                    height={300}
                                    alt="300x300"
                                    src="./assets/tplink.jpg"
                                />
                                <Figure.Caption>
                                    <h2><a style={{ color: "gray" }}>TP-Link JetStream T1600G-52TS - switch - 48 ports - Managed - rack-mountable</a></h2>
                                    <h5>Reviews:</h5>
                                    <StarRating />
                                    <h5>Product Features</h5>
                                    <p>
                                        Advanced QoS features<br />
                                        To integrate voice,data and video service on one network,the switch applies rich QoS policies. Administrator can designate the priority of the traffic based on a variety of means including Port Priority,802.1P Priority and DSCP Priority,to ensure that voice and video are always clear,smooth and jitter free. In conjunction with the Voice VLAN the switch supports,the voice applications will operate with much smoother performance.<br />
                                        Abundant L2 and L2+ features<br />
                                        For more application of L2 switches,T1600G-52TS supports a complete lineup of L2 features,including 802.1Q tag VLAN,Port Isolation,Port Mirroring,STP/RSTP/MSTP,Link Aggregation Group and 802.3x Flow Control function. Any more,the switches provide advanced features for network maintenance such as Loop Back Detection,Cable Diagnostics and IGMP Snooping. IGMP snooping ensures the switch intelligently forward the multicast stream only to the appropriate subscribers while IGMP throttling &filtering restrict each subscriber on a port level to prevent unauthorized multicast access. Moreover,T1600G-52TS supports L2+ feature - static routing,which is a simple way to provide segmentation of the network with internal routing through the switch and helps network traffic for more efficient use.<br />
                                        IPv6 Support<br />
                                        T1600G-52TS supports various IPv6 functions such as Dual IPv4/IPv6 Stack,MLD Snooping,Path Maximum Transmission Unit (PMTU) Discovery and IPv6 Neighbor Discovery.<br />
                                        Enterprise level management features<br />
                                        T1600G-52TS is easy to use and manage. It supports various user-friendly standard management features,such as intuitive web-based Graphical User Interface(GUI) or SNMP (v1/2/3) and RMON support enables the switch to be polled for valuable status information and send traps on abnormal events. And it also supports Dual Image，which provides reduced down-time for the switches,when the image is being upgraded / downgraded.<br />

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
export default Network