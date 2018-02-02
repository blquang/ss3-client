import React from 'react';
import axios from 'axios';
import * as apis from '../../constants/Apis';

class Footer extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            version: ""
        }
    }

    componentDidMount(){
        let _this = this;
        axios.get(apis.BASE_URL + 'app/version')
        .then(function (response) {
            if(response.status === 200){
                _this.setState({version: response.data.version});
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

	render() {
		return (
			<footer className="m-grid__item		m-footer ">
                <div className="m-container m-container--fluid m-container--full-height m-page__container">
                    <div className="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
                        <div className="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
                        <span className="m-footer__copyright">
                            <a href="https://rta.vn" className="m-link">Real-Time Analytics</a>
                            <i className="fa fa-heart text-danger" style={{fontSize: "12px", margin: "0 5px"}}></i>
                            <span style={{color: "#000"}}>SS3</span>
                        </span>
                        </div>
                        <div className="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
                            <ul className="m-footer__nav m-nav m-nav--inline m--pull-right">
                            <li className="m-nav__item">
                                <a href="https://ss3.rta.vn/changelog" className="m-nav__link">
                                    <span className="m-nav__link-text">
                                        Version {this.state.version}
                                    </span>
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
		);
	}
}

export default Footer;