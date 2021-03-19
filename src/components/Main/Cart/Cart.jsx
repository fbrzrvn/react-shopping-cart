import React, { Component } from 'react';

export default class Cart extends Component {
	render() {
		const { cartList } = this.props;
		const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10];
		const total = 0;
		return (
			<div className="cart">
				<h2>Shopping Cart</h2>
				<div className="cart__card">
					{cartList.length > 0 ? (
						cartList.map(item => (
							<div key={item.id} className="cart__item">
								<img src={item.img} alt={item.name} width="50px" />
								<div className="cart__item__info">
									<h3>{item.name}</h3>
									<p>{item.price}€</p>
								</div>
								<div className="cart__item__action">
									<select>
										{quantity.map((value, index) => (
											<option key={index} value={value}>
												{value}
											</option>
										))}
									</select>
									<button>Remove</button>
								</div>
							</div>
						))
					) : (
						<h2 className="cart__empty">Your cart is empty</h2>
					)}
					<div className="cart__total">
						<p>Total</p>
						<p>{total}€</p>
					</div>
					<button>Checkout</button>
				</div>
			</div>
		);
	}
}
