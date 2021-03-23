import React from 'react';
import Button from '../Button/Button';

import CartItem from './CartItem/CartItem';

const Cart = ({ cartList, error, handleRemove, handleChange }) => {
	const total = cartList.reduce(
		(tot, item) => (tot += item.price * item.quantity),
		0
	);

	return (
		<div className="cart">
			<h2>Shopping Cart</h2>
			<div className="cart__card">
				{cartList.length > 0 ? (
					cartList.map(item => (
						<CartItem
							key={item.id}
							item={item}
							handleRemove={handleRemove}
							handleChange={handleChange}
						/>
					))
				) : (
					<h2 className="cart__empty">Your cart is empty</h2>
				)}
				{error ? (
					<h3 className="error">You can add max 10 pieces for product</h3>
				) : null}
				<div className="cart__total">
					<p>Total</p>
					<p>{total}€</p>
				</div>
				<Button className="btn" text="checkout" />
			</div>
		</div>
	);
};

export default Cart;
