import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		const { id, handleAddToCart } = this.props;
		return (
			<button type="button" onClick={() => handleAddToCart(id)}>
				Add to Cart
			</button>
		);
	}
}
