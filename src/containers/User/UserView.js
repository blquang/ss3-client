import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import * as apis from '../../constants/Apis';
import * as utils from '../../utils';
import PageTitle from '../../components/Layout/PageTitle';
import Breadcrumbs from '../../components/Layout/Breadcrumbs';

const UserStatus = ({status}) => {
    let className = "";
    let txt = "";
    switch(status){
        case 1:
            className = "m-badge m-badge--success m-badge--wide";
            txt = "Active";
            break;

        default:
            className = "m-badge m-badge--danger m-badge--wide";
            txt = "Inactive";
            break;
    }
    return(
        <span className={className}>{txt}</span>
    )
}

const UserGender = ({gender}) => {
    return gender === 0 ? "Male" : "Female";
}

const UserRole = ({role}) => {
    switch(role){
        case 1:
            return "Administrator";

        case 2:
            return "Manager";

        default:
            return "(not set)";
    }
}

class UserView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: "",
            username: "",
            email: "",
            status: "",
            fullname: "",
            gender: "",
            date_of_birth: "",
            address: "",
            phone_number: "",
            role_id: "",
            created_at: "",
            updated_at: "",
            redirectToUserPage: false
        }
    }

    componentDidMount(){
        let _this = this;
        let {params} = this.props.match;
        if(params.hasOwnProperty("id")){
            let {id} = params;
            axios.get(apis.BASE_URL + 'user/' + id, {params: {access_token: apis.ACCESS_TOKEN}})
            .then(function (res) {
                let data = utils.unionObject( _this.state, res.data);
                console.log(data);
                _this.setState(data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    /**
     * Delete user.
     */
    deleteUser(){
        let result = window.confirm("Are you sure you want to delete this item?");
        if (result) {
            let _this = this;
            const {id} = this.state;
            axios.delete(apis.BASE_URL + 'user/' + id, {params: {access_token: apis.ACCESS_TOKEN}})
            .then(function (response) {
                _this.setState({redirectToUserPage: true});
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
   
    render(){
        if(this.state.redirectToUserPage){
            return (<Redirect to="/user" />);
        }
        return (
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
                <div className="m-subheader">
                    <div className="d-flex align-items-center">
                        <div className="mr-auto">
                            <PageTitle title={this.state.id}/>
                            <Breadcrumbs title={"Users - " + this.state.id}/>
                        </div>
                    </div>
                </div>
                <div className="m-content">
                    <div className="m-portlet m-portlet--mobile">
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <h3 className="m-portlet__head-text">
                                        {this.state.id}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="m-portlet__body">
                            <div className="user-view">
                                <div className="m--margin-bottom-30">
                                    <Link to={"/user/update/" + this.state.id} className="btn btn-info m-btn m-btn--custom m-btn--air"><span>Update</span></Link>
                                    <button className="btn btn-danger m-btn m-btn--custom m-btn--air" onClick={this.deleteUser.bind(this)}><span>Delete</span></button>
                                </div>
                                <table id="w0" className="table table-striped table-bordered detail-view">
                                    <tbody>
                                        <tr><th>ID</th><td>{this.state.id}</td></tr>
                                        <tr><th>Username</th><td>{this.state.username}</td></tr>
                                        <tr><th>Fullname</th><td>{this.state.fullname}</td></tr>
                                        <tr><th>Email</th><td><a href={"mailto:" + this.state.email}>{this.state.email}</a></td></tr>
                                        <tr>
                                            <th>Status</th>
                                            <td>
                                                <UserStatus status={this.state.status} />
                                            </td>
                                        </tr>
                                        <tr><th>Gender</th><td><UserGender gender={this.state.gender} /></td></tr>
                                        <tr><th>Date Of Birth</th><td>{this.state.date_of_birth}</td></tr>
                                        <tr><th>Address</th><td>{this.state.address}</td></tr>
                                        <tr><th>Phone Number</th><td>{this.state.phone_number}</td></tr>
                                        <tr><th>Role ID</th><td><UserRole role={this.state.role_id} /></td></tr>
                                        <tr><th>Created At</th><td>{this.state.created_at}</td></tr>
                                        <tr><th>Updated At</th><td>{this.state.updated_at}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserView;