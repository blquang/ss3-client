import React from 'react';

class PageTitle extends React.Component
{
	render() {
		return (
			<h3 className="m-subheader__title m-subheader__title--separator">{this.props.title}</h3>
		);
	}
}

export default PageTitle;