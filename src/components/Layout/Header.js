import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component
{
	render() {
		return (
            <header className="m-grid__item    m-header "  data-minimize-offset="200" data-minimize-mobile-offset="200" >
                <div className="m-container m-container--fluid m-container--full-height">
                    <div className="m-stack m-stack--ver m-stack--desktop">
                        <div className="m-stack__item m-brand  m-brand--skin-dark ">
                            <div className="m-stack m-stack--ver m-stack--general">
                                <div className="m-stack__item m-stack__item--middle m-brand__logo">
                                    <a href="/" className="m-brand__logo-wrapper">
                                        <img alt="" src="/rta.png" height="40"/>
                                    </a>
                                </div>
                                <div className="m-stack__item m-stack__item--middle m-brand__tools">
                                    <span id="m_aside_left_minimize_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block ">
                                        <span></span>
                                    </span>
                                    <span id="m_aside_left_offcanvas_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
                                        <span></span>
                                    </span>
                                    <span id="m_aside_header_menu_mobile_toggle" className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                                        <span></span>
                                    </span>
                                    <span id="m_aside_header_topbar_mobile_toggle" className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                                        <i className="flaticon-more"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
                            <button className="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark " id="m_aside_header_menu_mobile_close_btn">
                                <i className="la la-close"></i>
                            </button>
                            <div id="m_header_topbar" className="m-topbar  m-stack m-stack--ver m-stack--general">
                                <div className="m-stack__item m-topbar__nav-wrapper">
                                    <ul className="m-topbar__nav m-nav m-nav--inline">
                                        <li className="m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light" data-dropdown-toggle="click">
                                            <a href="/" className="m-nav__link m-dropdown__toggle">
                                                <span className="m-topbar__userpic">
                                                    <img src="/assets/img/user.jpg" className="m--img-rounded m--marginless m--img-centered" alt=""/>
                                                </span>
                                            </a>
                                            <div className="m-dropdown__wrapper">
                                                <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                                                <div className="m-dropdown__inner">
                                                    <div className="m-dropdown__header m--align-center" style={{background: "url(/assets/img/user_profile_bg.jpg)", backgroundSize: "cover"}}>
                                                        <div className="m-card-user m-card-user--skin-dark">
                                                            <div className="m-card-user__pic">
                                                                <img src="/assets/img/user.jpg" className="m--img-rounded m--marginless" alt=""/>
                                                            </div>
                                                            <div className="m-card-user__details">
                                                                <span className="m-card-user__name m--font-weight-500">
                                                                    Quang Bui
                                                                </span>
                                                                <a href="/" className="m-card-user__email m--font-weight-300 m-link">
                                                                    quangbui@rta.vn
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="m-dropdown__body">
                                                        <div className="m-dropdown__content">
                                                            <ul className="m-nav m-nav--skin-light">
                                                                <li className="m-nav__item">
                                                                    <a href="/" className="m-nav__link">
                                                                        <i className="m-nav__link-icon flaticon-profile-1"></i>
                                                                        <span className="m-nav__link-text">
                                                                            My Profile											</span>
                                                                    </a>
                                                                </li>
                                                                <li className="m-nav__item">
                                                                    <a href="/" className="m-nav__link">
                                                                        <i className="m-nav__link-icon flaticon-lock-1"></i>
                                                                        <span className="m-nav__link-text">
                                                                            Change Password											</span>
                                                                    </a>
                                                                </li>
                                                                <li className="m-nav__separator m-nav__separator--fit"></li>
                                                                <li className="m-nav__item">
                                                                    <Link to="/logout" className="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">Logout</Link>									</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
		);
	}
}

export default Header;