import React from 'react';

import PortletTitle from './PortletTitle';
import PortletBody from './PortletBody';
import PortletFoot from './PortletFoot';

class Portlet extends React.Component
{
    render() {
        return(
            <div className={ this.props.className || 'm-portlet m-portlet--mobile' }>
                { this.props.children }
            </div>
        );
    }
}

Portlet.Title = PortletTitle;

Portlet.Body = PortletBody;

Portlet.Foot = PortletFoot;

export default Portlet;
