import React from 'react';

class PortletTitle extends React.Component
{
	render() {
		return (
            <div className={ this.props.className || 'm-portlet__head' }>
				{ this.props.children }
			</div>
		);
	}
}

export default PortletTitle;
