import React from 'react';

class PortletBody extends React.Component
{
	render() {
		return (
            <div className={ this.props.className || 'm-portlet__body' }>
                { this.props.children }
            </div>
		);
	}
}

export default PortletBody;
