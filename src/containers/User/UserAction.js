import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import * as apis from '../../constants/Apis';
import * as utils from '../../utils';
import { Form, FormGroup, ControlLabel, Col, FormControl, Row } from 'react-bootstrap';
import PageTitle from '../../components/Layout/PageTitle';
import Breadcrumbs from '../../components/Layout/Breadcrumbs';
import Portlet from '../../components/Portlet';
import DateTime from '../../components/DateTime';

class UserAction extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            fullname: "",
            gender: "0",
            date_of_birth: "",
            address: "",
            phone_number: "",
            status: "1",
            role_id: "1",
            actionType: "0", // 0: create, 1: update
            error: {},
            redirectToUserPage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this, props.match.params.id);
    }

    componentDidMount(){
        const {params} = this.props.match;
        const _this = this;
        if(params.hasOwnProperty("id")){
            let {id} = params;
            axios.get(apis.BASE_URL + 'user/' + id, {params: {access_token: apis.ACCESS_TOKEN}})
            .then(function (res) {
                let data = utils.unionObject( _this.state, res.data);
                data.actionType = "1";
                _this.setState(data);
            })
            .catch(function (error) {
                console.log(error);
            });

        }
    }

    resetForm(){
        const {params} = this.props.match;
        if(params.hasOwnProperty("id")){
            const _this = this;
            let {id} = params;
            axios.get(apis.BASE_URL + 'user/' + id, {params: {access_token: apis.ACCESS_TOKEN}})
            .then(function (res) {
                let data = {
                    fullname: "",
                    gender: "0",
                    date_of_birth: "",
                    address: "",
                    phone_number: "",
                    status: "1",
                    role_id: "1",
                    error: {}
                };
                data = utils.unionObject( data, res.data);
                _this.setState(data);
                console.log(data);
                // _this.setState({data: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });

        }
        else{
            this.setState({
                username: "",
                password: "",
                email: "",
                fullname: "",
                gender: "0",
                date_of_birth: "",
                address: "",
                phone_number: "",
                status: "1",
                role_id: "1",
                error: {}
            });
        }
    }

    handleChange(ev){
        let newValue = {};
        newValue[ev.target.name] = ev.target.value;
        this.setState(newValue);
    }

    // Handle username change
    handleUserChange(ev){
        let {error} = this.state;
        let value = ev.target.value;
        if(value.toString().trim().length === 0){
            error.userEmpty = true;
        }
        else{
            error.userEmpty = false;
        }
        error.errMsg = false;
        this.setState({
            username: value,
            error: error
        });
    }

    // Handle password change
    handlePassChange(ev){
        let {error} = this.state;
        let value = ev.target.value;
        if(value.toString().trim().length === 0){
            error.passwordEmpty = true;
        }
        else{
            error.passwordEmpty = false;
        }
        error.errMsg = false;
        this.setState({
            password: value,
            error: error
        });
    }

    // Handle email change
    handleEmailChange(ev){
        let {error} = this.state;
        let value = ev.target.value;
        if(value.toString().trim().length === 0){
            error.emailEmpty = true;
        }
        else{
            error.emailEmpty = false;
        }
        error.invalidEmail = false;
        error.errMsg = false;
        this.setState({
            email: value,
            error: error
        });
    }

    validateEmail(email){
        let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(email.toString().trim().length === 0){
            return false;
        }
        return regex.test(email);
    }

    // Handle when create
    handleCreate(ev) {
        ev.preventDefault();

        let error = {};
        if( this.state.username.toString().trim().length === 0 ){
            error.userEmpty = true;
        }
        if( this.state.password.toString().trim().length === 0 ){
            error.passwordEmpty = true;
        }
        if(!this.validateEmail(this.state.email)){
            error.invalidEmail = true;
        }
        if(Object.keys(error).length > 0){
            this.setState({error:error});
            return false;
        }

        let self = this;
        let data = Object.assign({}, this.state);
        delete data.error;
        let config = {params: {access_token: apis.ACCESS_TOKEN}};
        axios.post(apis.BASE_URL + 'user', data, config)
        .then(function (res) {
            console.log("Create user success.", res.data);
            self.setState({redirectToUserPage: true});
        })
        .catch(function (error) {
            console.log(error.message);
            self.setState({error: {errMsg: "Create new user is not success. Please try again."}});
        });
    }

    // Handle when update
    handleUpdate(id, ev){
        ev.preventDefault();
        let self = this;
        let data = {
            fullname: "",
            gender: "",
            date_of_birth: "",
            address: "",
            phone_number: "",
            status: "",
            role_id: ""
        };
        data = utils.unionObject(data, this.state);
        console.log("update", data);
        let config = {params: {access_token: apis.ACCESS_TOKEN}};
        axios.put(apis.BASE_URL + 'user/' + id, data, config)
        .then(function (res) {
            console.log("Update user success.", res.data);
            self.setState({redirectToUserPage: true});
        })
        .catch(function (error) {
            console.log(error);
            self.setState({error: {errMsg: "Update user is not success. Please try again."}});
        });
    }
   
    render(){
        let {error, redirectToUserPage} = this.state;
        if(redirectToUserPage){
            return (<Redirect to="/user" />);
        }
        
        return (
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
                <div className="m-subheader">
                    <div className="d-flex align-items-center">
                        <div className="mr-auto">
                            <PageTitle title="New User"/>
                            <Breadcrumbs title="Users  -  New User"/>
                        </div>
                    </div>
                </div>
                <div className="m-content">
                    <Portlet>
                        <Portlet.Title>
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <h3 className="m-portlet__head-text">
                                        New User
                                    </h3>
                                </div>
                            </div>
                        </Portlet.Title>
                        <Portlet.Body>
                            <Form className="m-form m-form--fit m-form--label-align-right" onSubmit={(ev) => { ev.preventDefault(); }}>
                                <div className="form-body">
                                    <FormGroup className="m-form__group row">
                                        <Col componentClass={ControlLabel} sm={12} lg={3} className="col-form-label">Username <span className="required">*</span></Col>
                                        <Col sm={12} md={9} lg={4}>
                                            <FormControl type="text" name="username" disabled={this.state.actionType === "0" ? false : true} value={this.state.username} onChange={this.handleUserChange} maxLength="255"/>
                                            {error.userEmpty ? <p className="error-msg">Username cannot be blank.</p> : null}
                                        </Col>
                                    </FormGroup>
                                    {
                                        this.state.actionType === "0" ?
                                        <FormGroup className="m-form__group row">
                                            <Col componentClass={ControlLabel} sm={12} lg={3} className="col-form-label">Password <span className="required">*</span></Col>
                                            <Col sm={12} md={9} lg={4}>
                                                <FormControl type="password" name="password" value={this.state.password} onChange={this.handlePassChange} maxLength="255"/>
                                                {error.passwordEmpty ? <p className="error-msg">Password cannot be blank.</p> : null}
                                            </Col>
                                        </FormGroup> : null
                                    }
                                    <FormGroup className="m-form__group row">
                                        <Col componentClass={ControlLabel} sm={12} lg={3} className="col-form-label">Email <span className="required">*</span></Col>
                                        <Col sm={12} md={9} lg={4}>
                                            <FormControl type="email" name="email" disabled={this.state.actionType === "0" ? false : true} value={this.state.email} onChange={this.handleEmailChange} maxLength="255"/>
                                            {error.invalidEmail ? <p className="error-msg">Email is invalid.</p> : null}
                                            {error.emailEmpty ? <p className="error-msg">Email cannot be blank.</p> : null}
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="m-form__group row">
                                        <Col componentClass={ControlLabel} sm={12} lg={3} className="col-form-label">Fullname</Col>
                                        <Col sm={12} md={9} lg={4}>
                                            <FormControl type="text" name="fullname" value={this.state.fullname} onChange={this.handleChange} maxLength="255"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="m-form__group row">
                                        <Col componentClass={ControlLabel} sm={12} lg={3} className="col-form-label">Gender</Col>
                                        <Col sm={12} md={9} lg={4}>
                                            <FormControl componentClass="select" name="gender" value={this.state.gender} onChange={this.handleChange}>
                                                <option value="0">Male</option>
                                                <option value="1">Female</option>
                                            </FormControl>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="m-form__group row">
                                        <Col componentClass={ControlLabel} sm={12} lg={3} className="col-form-label">Date Of Birth</Col>
                                        <Col sm={12} md={9} lg={4}>
                                            <DateTime
                                                inputProps={{readOnly:true, className:'form-control'}}
                                                value={this.state.date_of_birth}
                                                timeFormat={false}
                                                isValidDate={()=>true}
                                                closeOnSelect={true}
                                                onChange={(date) => {
                                                    this.setState({date_of_birth: date})
                                                }}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="m-form__group row">
                                        <Col componentClass={ControlLabel} sm={12} lg={3} className="col-form-label">Address</Col>
                                        <Col sm={12} md={9} lg={4}>
                                            <FormControl type="text" name="address" value={this.state.address} onChange={this.handleChange} maxLength="255"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="m-form__group row">
                                        <Col componentClass={ControlLabel} sm={12} lg={3} className="col-form-label">Phone Number</Col>
                                        <Col sm={12} md={9} lg={4}>
                                            <FormControl type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleChange} maxLength="255"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="m-form__group row">
                                        <Col componentClass={ControlLabel} sm={12} lg={3} className="col-form-label">Status</Col>
                                        <Col sm={12} md={9} lg={4}>
                                            <FormControl componentClass="select" name="status" value={this.state.status} onChange={this.handleChange}>
                                                <option value="1">Active</option>
                                                <option value="0">Inactive</option>
                                            </FormControl>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="m-form__group row">
                                        <Col componentClass={ControlLabel} sm={12} lg={3} className="col-form-label">Role ID</Col>
                                        <Col sm={12} md={9} lg={4}>
                                            <FormControl componentClass="select" name="role_id" value={this.state.role_id} onChange={this.handleChange}>
                                                <option value="1">Administrator</option>
                                                <option value="2">Manager</option>
                                            </FormControl>
                                        </Col>
                                    </FormGroup>
                                    {
                                        error.errMsg ? 
                                        <FormGroup className="m-form__group row">
                                            <Col sm={12} lg={3}></Col>
                                            <Col sm={12} md={9} lg={4}>
                                                <p className="error-msg">{error.errMsg}</p>
                                            </Col>
                                        </FormGroup>
                                          : null
                                    }
                                </div>
                            </Form>
                        </Portlet.Body>
                        <Portlet.Foot>
                            <div className="m-form__actions">
                                <Row>
                                    <Col lg={9} className="ml-lg-auto">
                                        {
                                            this.state.actionType === "0"?
                                            <button className="btn btn-success m-btn m-btn--custom m-btn--air" onClick={this.handleCreate}>Submit</button> :
                                            <button className="btn btn-success m-btn m-btn--custom m-btn--air" onClick={this.handleUpdate}>Save</button>
                                        }
                                        <button className="btn btn-info m-btn m-btn--custom m-btn--air" onClick={this.resetForm}>Reset</button>
                                    </Col>
                                </Row>
                            </div>
                        </Portlet.Foot>
                    </Portlet>
                </div>
            </div>
        );
    }
}

export default UserAction;