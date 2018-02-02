import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as apis from '../../constants/Apis';
import DataTable from '../../components/DataTable';
import PageTitle from '../../components/Layout/PageTitle';
import Breadcrumbs from '../../components/Layout/Breadcrumbs';

class User extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        let _this = this;
        axios.get(apis.BASE_URL + 'user', {params: {access_token: apis.ACCESS_TOKEN}})
        .then(function (response) {
            _this.setState({data: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    /**
     * Delete user.
     */
    deleteUser(userID){
        let result = window.confirm("Are you sure you want to delete this item?");
        if (result) {
            let _this = this;
            axios.delete(apis.BASE_URL + 'user/' + userID, {params: {access_token: apis.ACCESS_TOKEN}})
            .then(function (response) {
                axios.get(apis.BASE_URL + 'user', {params: {access_token: apis.ACCESS_TOKEN}})
                .then(function (response) {
                    _this.setState({data: response.data});
                })
                .catch(function (error) {
                    console.log(error);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
   
    render(){
        // console.log("User List render");
        const _this = this;
        let config = {
            rowsPerPage: 10,
            filter: true,
            paged: 1,
            cols: [
                { property: "username", header: "Username", sortable: true,
                    decorator : () => {
                        return { style : { width : "20%" } };
                    },
                    renderer : function(){
                        return this.value ? this.value : "(not set)";
                    }
                },
                { property: "fullname", header: "Fullname", sortable: true,
                    decorator : () => {
                        return { style : { width : "20%" } };
                    },
                    renderer : function(){
                        return this.value ? this.value : "(not set)";
                    }
                },
                { property: "email", header: "Email", sortable: true,
                    decorator : () => {
                        return { style : { width : "20%" } };
                    },
                    renderer : function(){
                        return this.value ? this.value: "(not set)";
                    }
                },
                { property: "role_id", header: "Role ID", sortable: true,
                    decorator : () => {
                        return { style : { width : "15%" } };
                    },
                    renderer : function(){
                        switch(this.value){
                            case 1:
                                return "Administrator";

                            case 2:
                                return "Manager";

                            default:
                                return "(not set)";
                        }
                    }
                },
                { property: "status", header: "Status", sortable: true,
                    decorator : () => {
                        return { style : { width : "15%" } };
                    },
                    renderer : function(){
                        let className = "";
                        let txt = "";
                        switch(this.value){
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
                },
                { property: "id", header: "Actions", noFilter: true,
                    decorator : () => {
                        return { style : { overflow: "visible", width: "15%" } };
                    },
                    renderer : function(){
                        return (
                            <span>
                                <Link to={"/user/view/" + this.value} className="m-portlet__nav-link btn m-btn m-btn--hover-info m-btn--icon m-btn--icon-only m-btn--pill" title="View"><i className="la la-search"></i></Link>
                                <Link to={"/user/update/" + this.value} className="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Update"><i className="la la-edit"></i></Link>
                                <a onClick={_this.deleteUser.bind(_this, this.value)} className="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete"><i className="la la-trash"></i></a>	
                            </span>
                        )
                    }
                }
            ]
        }
        return (
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
                <div className="m-subheader">
                    <div className="d-flex align-items-center">
                        <div className="mr-auto">
                            <PageTitle title="Users"/>
                            <Breadcrumbs title="Users"/>
                        </div>
                    </div>
                </div>
                <div className="m-content">
                    <div className="m-portlet m-portlet--mobile">
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <h3 className="m-portlet__head-text">
                                        User List
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="m-portlet__body">
                            <div className="m--margin-bottom-30">
                                <Link to="/user/create" className="btn btn-info m-btn m-btn--custom m-btn--air">
                                   <span>New User</span>
                                </Link>
                            </div>
                            <DataTable datasource={this.state.data} config={config} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;