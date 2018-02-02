import React from 'react';
import axios from 'axios';
import * as apis from '../../constants/Apis';
import { Redirect } from 'react-router-dom';

window.onresize = function(event) {
    if(document.getElementById('m_login')){
        document.getElementById('m_login').style.minHeight = window.innerHeight + "px";
    }
};

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            submitError: false,
            userEmpty: false,
            passEmpty: false
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(document.getElementById('m_login')){
            document.getElementById('m_login').style.minHeight = window.innerHeight + "px";
        }
    }

    // Handle username change
    handleUserChange(event) {
        let value = event.target.value;
        let userEmpty = false;
        if(value.toString().trim().length === 0){
            userEmpty = true;
        }
        this.setState({
            username: value,
            userEmpty: userEmpty,
            submitError: false
        });
    }

    // Handle password change
    handlePassChange(event) {
        let value = event.target.value;
        let passEmpty = false;
        if(value.toString().trim().length === 0){
            passEmpty = true;
        }
        this.setState({
            password: value,
            passEmpty: passEmpty,
            submitError: false
        });
    }

    // Handle submit form
    handleSubmit(event) {
        event.preventDefault();

        let error = {};
        if( this.state.username.toString().trim().length === 0 ){
            error.userEmpty = true;
        }
        if( this.state.password.toString().trim().length === 0 ){
            error.passEmpty = true;
        }
        if(Object.keys(error).length > 0){
            this.setState(error);
            return false;
        }

        let self = this;
        axios.post( apis.BASE_URL + 'auth/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(function(res) {
            console.log('response: ', res);
            if(res.data.access_token !== undefined){
                localStorage.setItem("access_token", res.data.access_token);
                localStorage.setItem("user_id", res.data.user_id);
                self.setState({submitError: false});
            }
            else{
                self.setState({submitError: true});
            }
        }).catch(function (error) {
            self.setState({submitError: true});
            console.log(error);
        });
    }

    render(){
        let access_token = localStorage.getItem("access_token");
        if( access_token ){
            return(<Redirect to='/'/>);
        }
        return (
            <div className="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--singin m-login--2 m-login-2--skin-2" id="m_login" style={{backgroundImage: "url(/assets/img/bg/bg-3.jpg)"}}>
                <div className="m-grid__item m-grid__item--fluid m-login__wrapper">
                    <div className="m-login__container">
                        <div className="m-login__logo">
                            <a href="/">
                                <img src="/rta.png" alt="logo" height="80"/>
                            </a>
                        </div>
                        <div className="m-login__signin">
                            <div className="m-login__head">
                                <h3 className="m-login__title">
                                    Sign In To Dashboard
                                </h3>
                            </div>
                            <form className="m-login__form m-form" action="">
                                <div className="form-group m-form__group">
                                    <input className="form-control m-input" type="text" placeholder="Username" autoComplete="off" onChange={this.handleUserChange}/>
                                    {this.state.userEmpty ? <p className="error-msg">Username cannot be blank.</p> : null}
                                </div>
                                <div className="form-group m-form__group">
                                    <input className="form-control m-input m-login__form-input--last" type="password" placeholder="Password" onChange={this.handlePassChange} />
                                    {this.state.passEmpty? <p className="error-msg">Password cannot be blank.</p>: null}
                                    {this.state.submitError? <p className="error-msg">Incorrect username or password.</p>: null}
                                </div>
                                <div className="row m-login__form-sub">
                                    <div className="col m--align-left m-login__form-left">
                                        <label className="m-checkbox  m-checkbox--focus">
                                            <input type="checkbox" name="remember"/>
                                            Remember me
                                            <span></span>
                                        </label>
                                    </div>
                                    <div className="col m--align-right m-login__form-right">
                                        <a id="m_login_forget_password" className="m-link">
                                            Forget Password ?
                                        </a>
                                    </div>
                                </div>
                                <div className="m-login__form-action">
                                    <button className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary" onClick={this.handleSubmit}>
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;