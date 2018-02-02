import React from 'react';
import PageTitle from '../components/Layout/PageTitle';

class Dashboard extends React.Component
{
	render() {
        console.log("Dashboard render");
		return (
			<div className="m-grid__item m-grid__item--fluid m-wrapper">
            <div className="m-subheader">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <PageTitle title="Dashboard"/>
                    </div>
                </div>
            </div>
            <div className="m-content">
                <div className="m-portlet m-portlet--mobile">
                    <div className="m-portlet__head">
                        <div className="m-portlet__head-caption">
                        <div className="m-portlet__head-title">
                            <span className="m-portlet__head-icon">
                                <i className="flaticon-map-location"></i>
                            </span>
                            <h3 className="m-portlet__head-text">Device Map</h3>
                        </div>
                        </div>
                    </div>
                    <div className="m-portlet__body">
                        <div className="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
                            <div className="row align-items-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		);
	}
}

export default Dashboard;