import React from 'react';
import {Link} from 'react-router-dom';

class Breadcrumbs extends React.Component
{
	render() {
		return (
			<ul className="m-subheader__breadcrumbs m-nav m-nav--inline">
                <li className="m-nav__item m-nav__item--home">
                    <Link to="/" className="m-nav__link m-nav__link--icon"><i className="m-nav__link-icon la la-home"></i></Link>
                </li>
                <li className="m-nav__separator"> - </li>
                <li className="m-nav__item active">
                    <span className="m-nav__link m-nav__link--icon"><span className="m-nav__link-text">{this.props.title}</span></span>
                </li>
            </ul>
		);
	}
}

export default Breadcrumbs;