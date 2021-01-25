import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Button, ButtonToolbar, Jumbotron, Nav } from 'react-bootstrap'
import SignupForm from './SignupForm'


class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = event => {
        alert("Username: " + this.state.username + " " + "Password: " + this.state.password)
    }
    render() {
        return (
            <form style={{ textAlign: 'center' }} onSubmit={this.handleSubmit}>
                <Container>
                <Jumbotron>
                    <div>
                        <label >Username</label>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    </div>
                    <div style={{ position: 'relative', left: '0.05cm' }}>
                        <label>Password</label>
                        <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
                    </div>
                    <ButtonToolbar className='justify-content-center'>
                        <Button type="login">Log In</Button>
                        <Router>
                            <Switch>
                                <Route path="/signupform" component={SignupForm} />
                            </Switch>
                        </Router>
                        <Nav>
                            <Nav.Item><Nav.Link href="/signupform">or Sign Up</Nav.Link></Nav.Item>
                        </Nav>
                    </ButtonToolbar>
                </Jumbotron>
                </Container>
            </form>
        );
    }
}
export default LoginForm