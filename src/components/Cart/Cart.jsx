import React, { Component } from 'react';
import Button from '../Button/Button';
import CartItem from './CartItem/CartItem';

export default class Cart extends Component {
	render() {
		const { cartList, handleRemove } = this.props;
		const total = cartList.reduce((tot, item) => (tot += item.price), 0);

		return (
			<div className="cart">
				<h2>Shopping Cart</h2>
				<div className="cart__card">
					{cartList.length > 0 ? (
						cartList.map(item => (
							<CartItem key={item.id} item={item} handleRemove={handleRemove} />
						))
					) : (
						<h2 className="cart__empty">Your cart is empty</h2>
					)}
					<div className="cart__total">
						<p>Total</p>
						<p>{total}€</p>
					</div>
					<Button className="btn" text="checkout" />
				</div>
			</div>
		);
	}
}
