import React, { Component } from 'react';
import Button from './Button';

export default class Product extends Component {
	render() {
		const { id, img, name, price, handleAddToCart } = this.props;

		return (
			<div className="product__card">
				<img src={img} alt={name} />
				<div className="product__card__info">
					<h4 className="product__card__title">{name}</h4>
					<p className="product__card__price">{price}€</p>
					<Button id={id} handleAddToCart={handleAddToCart}>
						Add to Cart
					</Button>
				</div>
			</div>
		);
	}
}
