import React from 'react';
import {Link} from 'react-router-dom';

class PageSidebar extends React.Component 
{
	render() {
		return (
			<div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
                <div 
                    id="m_ver_menu" 
                    className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " 
                    data-menu-vertical="true"
                    data-menu-scrollable="false" data-menu-dropdown-timeout="500"  
                >
                    <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                        <li className="m-menu__item" aria-haspopup="true" >
                            <Link  to="/dashboard" className="m-menu__link" replace>
                                <i className="m-menu__link-icon flaticon-line-graph"></i>
                                <span className="m-menu__link-text">
                                    Dashboard
                                </span>
                            </Link>
                        </li>
                        <li className="m-menu__item" aria-haspopup="true">
                            <Link to="/data-entry" className="m-menu__link m-menu__toggle" replace>
                                <i className="m-menu__link-icon flaticon-layers"></i>
                                <span className="m-menu__link-text">
                                    Data Entry
                                </span>
                            </Link>
                        </li>
                        <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                            <span className="m-menu__link m-menu__toggle">
                                <i className="m-menu__link-icon flaticon-clipboard"></i>
                                <span className="m-menu__link-text">
                                    Forms
                                </span>
                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                            </span>
                            <div className="m-menu__submenu">
                                <span className="m-menu__arrow"></span>
                                <ul className="m-menu__subnav">
                                    <li className="m-menu__item " aria-haspopup="true" >
                                        <Link to="/form-builder" className="m-menu__link" replace>
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                Form Builder
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="m-menu__item " aria-haspopup="true" >
                                        <Link to="/design" className="m-menu__link" replace>
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                Form Design
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="m-menu__item " aria-haspopup="true">
                                        <Link to="/family" className="m-menu__link" replace>
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                Form Family
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="m-menu__item " aria-haspopup="true">
                                        <Link to="/family-permission" className="m-menu__link" replace >
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                Form Permission
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                            <span className="m-menu__link m-menu__toggle">
                                <i className="m-menu__link-icon flaticon-graphic-1"></i>
                                <span className="m-menu__link-text">
                                    Analytics
                                </span>
                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                            </span>
                            <div className="m-menu__submenu">
                                <span className="m-menu__arrow"></span>
                                <ul className="m-menu__subnav">
                                    <li className="m-menu__item " aria-haspopup="true" >
                                        <Link to="/report-viewer" className="m-menu__link" replace >
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                Report Viewer
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="m-menu__item " aria-haspopup="true" >
                                        <Link to="/report" className="m-menu__link" replace>
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                Report Development
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="m-menu__item " aria-haspopup="true" >
                                        <Link to="/report-permission" className="m-menu__link" replace>
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                Report Permission
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                            <span className="m-menu__link m-menu__toggle">
                                <i className="m-menu__link-icon flaticon-users"></i>
                                <span className="m-menu__link-text">
                                    Users
                                </span>
                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                            </span>
                            <div className="m-menu__submenu">
                                <span className="m-menu__arrow"></span>
                                <ul className="m-menu__subnav">
                                    <li className="m-menu__item " aria-haspopup="true" >
                                        <Link to="/user" className="m-menu__link" replace>
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                User List
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="m-menu__item " aria-haspopup="true">
                                        <Link to="/role" className="m-menu__link" replace>
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                User Role
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="m-menu__item " aria-haspopup="true" >
                                        <Link to="/notification" className="m-menu__link" replace>
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                Notification
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                            <span className="m-menu__link m-menu__toggle">
                                <i className="m-menu__link-icon flaticon-settings"></i>
                                <span className="m-menu__link-text">
                                    Configuration
                                </span>
                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                            </span>
                            <div className="m-menu__submenu">
                                <span className="m-menu__arrow"></span>
                                <ul className="m-menu__subnav">
                                    <li className="m-menu__item " aria-haspopup="true" >
                                        <Link to="/cloud-setting" className="m-menu__link" replace>
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                Cloud Settings
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="m-menu__item " aria-haspopup="true" >
                                        <Link to="/app-setting" className="m-menu__link" replace>
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                App Settings
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                            <span className="m-menu__link m-menu__toggle">
                                <i className="m-menu__link-icon flaticon-paper-plane"></i>
                                <span className="m-menu__link-text">
                                    Webhooks
                                </span>
                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                            </span>
                            <div className="m-menu__submenu">
                                <span className="m-menu__arrow"></span>
                                <ul className="m-menu__subnav">
                                    <li className="m-menu__item " aria-haspopup="true" >
                                        <Link to="/webhook-subscriber" className="m-menu__link" replace>
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                Incoming Request
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="m-menu__item " aria-haspopup="true" >
                                        <Link to="/webhook-dispatcher" className="m-menu__link" replace>
                                            <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                <span></span>
                                            </i>
                                            <span className="m-menu__link-text">
                                                Outgoing Request
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
		);
	}
}

export default PageSidebar;