import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PageSidebar from './PageSidebar';
import User from '../../containers/User';
import UserAction from '../../containers/User/UserAction';
import UserView from '../../containers/User/UserView';
import Dashboard from '../../containers/Dashboard';

class Main extends React.Component
{
    getPage() {
        const pages = {
            "User": <User {...this.props}/>,
            "UserAction": <UserAction {...this.props}/>,
            "UserView": <UserView {...this.props}/>,
            "Dashboard": <Dashboard {...this.props}/>
        };
        return pages[this.props.page ? this.props.page : "Dashboard"];
    }

	render() {
        let access_token = localStorage.getItem("access_token");
        if( !access_token ){
            return(<Redirect to='/login'/>);
        }
        return (
            <div>
                <Header />
                <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
                    <PageSidebar />
                    { this.getPage() }
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;