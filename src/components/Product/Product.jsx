import React from 'react';
import Button from '../Button/Button';

const Product = ({ id, img, name, price, handleAddToCart }) => {
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
};

export default Product;
