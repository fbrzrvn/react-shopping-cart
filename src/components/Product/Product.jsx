import React, { Component } from 'react';
import Button from '../Button/Button';

export default class Product extends Component {
	render() {
		const { id, img, name, price, handleAddToCart } = this.props;

		return (
			<div className="product__card">
				<img src={img} alt={name} />
				<div className="product__card__details">
					<div className="product__card__info">
						<h4 className="product__card__title">{name}</h4>
						<h3 className="product__card__price">{price}€</h3>
					</div>
					<Button onClick={() => handleAddToCart(id)} text="Add to Cart" />
				</div>
			</div>
		);
	}
}
