import React, {Component} from 'react'
import {Container, Button, ButtonToolbar, Jumbotron} from 'react-bootstrap'
import axios from 'axios';

class SignupForm extends Component{
    constructor(props){
        super(props)


        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
        // this.handleYearChange = this.handleYearChange.bind(this);
        // this.handleMonthChange = this.handleMonthChange.bind(this);
        // this.handleDayChange = this.handleDayChange.bind(this);
        
        
        this.state ={
            message: '',
            username: '',
            password: '',
            email: '',
            // year: '',
            // month: '',
            // day: ''
        }
        this.clickHandler = this.clickHandler.bind(this)
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
   
    handleEmailAddressChange = event => {
        this.setState({
            email: event.target.value
        })
    }
    // handleMonthChange = event => {
    //     this.setState({
    //         month: event.target.value
    //     })
    // }
    // handleDayChange = event => {
    //     this.setState({
    //         day: event.target.value
    //     })
    // }
    // handleYearChange = event => {
    //     this.setState({
    //         year: event.target.value
    //     })
    // }
    handleSubmit = event => {
        event.preventDefault();
        const user = {
            username: this.state.username,
            // password: this.state.password,
            // email: this.state.email
            // repeatpassword:this.state.repeatpassword
            // month: this.state.month,
            // day: this.state.day,
            // year: this.state.year 
        }
        console.log(user);
        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data))
        .catch(error =>{
            console.log(error.res)
        })
        this.setState({
            username:'',
            // password:'',
            // email:''
            // repeatpassword:''
            
        })
        // window.location ="/"

    }
    clickHandler(){
        this.setState({
            message: 'Submitted!'
        })
        console.log(this)
    }
  
    
    render(){
        return(
            <Container>
            <form style={{textAlign:'center'}} onSubmit={this.handleSubmit}>
                    <Jumbotron>
                    <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>

                    <div style={{position:'relative', left:'0.1cm' }}>
                    <label>Password</label>
                    <input type= 'text' value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>

                    <div style={{ position:'relative', right:'0.33cm'}}>
                    <label>Email Address</label>
                    <input type = 'text' value={this.state.email} onChange={this.handleEmailAddressChange}/>
                    </div>

                    
                    
                    <ButtonToolbar className= 'justify-content-center'>
                    <Button  variant="secondary" type ="submit"  onClick={this.clickHandler}>Submit</Button>
                    <Button variant="secondary">Reset </Button>
                    </ButtonToolbar>
                    <div>
                        {this.state.message}</div>
                        </Jumbotron>
               
            </form>
            </Container>
        );
        }
}
export default SignupForm