import React from 'react';

class PortletFoot extends React.Component
{
	render() {
		return (
            <div className={ this.props.className || 'm-portlet__foot' }>
                { this.props.children }
            </div>
		);
	}
}

export default PortletFoot;