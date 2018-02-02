import React from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
    componentDidMount() {
        localStorage.setItem("access_token", "");
    }
    render(){
        return(<Redirect to='/login'/>);
    }
}

export default Logout;