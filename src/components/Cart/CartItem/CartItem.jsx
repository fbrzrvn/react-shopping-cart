import React from 'react';
import Button from '../../Button/Button';

const CartItem = ({ item, handleRemove, handleChange }) => {
	const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<div key={item.id} className="cart__item">
			<img src={item.img} alt={item.name} />
			<div className="cart__item__info">
				<div className="cart__item__info__details">
					<h3>{item.name}</h3>
					<h3>{item.price}€</h3>
				</div>
				<div className="cart__item__info__action">
					<select
						value={item.quantity}
						onChange={e => handleChange(e, item.id)}
					>
						{quantity.map((value, index) => (
							<option key={index} value={value}>
								{value}
							</option>
						))}
					</select>
					<Button text="Remove" onClick={() => handleRemove(item.id)} />
				</div>
			</div>
		</div>
	);
};

export default CartItem;
