import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		const { ...props } = this.props;
		return (
			<button type="button" className="btn" {...props}>
				{props.text}
			</button>
		);
	}
}
