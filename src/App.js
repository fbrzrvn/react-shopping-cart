import React, { useState, useEffect } from 'react';

import { products } from './utils/product';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';

const App = () => {
	const [cartList, setCartList] = useState(
		JSON.parse(localStorage.getItem('products')) || []
	);
	const [error, setError] = useState(false);

	useEffect(() => {
		setCartList(localStorage.setItem('products', JSON.stringify(cartList)));
	}, [cartList]);

	const handleAddToCart = id => {
		const index = cartList.findIndex(item => item.id === id);
		if (index !== -1) {
			const foundItem = cartList.map(item => {
				if (item.id === id && item.quantity < 10) {
					item.quantity = Number(item.quantity) + 1;
				} else if (item.id === id && item.quantity >= 10) {
					setError(true);
					setTimeout(() => {
						setError(false);
					}, 3000);
				}
				return item;
			});
			setCartList(foundItem);
		} else {
			const selectedProduct = { ...products.find(item => item.id === id) };
			setCartList([...cartList, { ...selectedProduct, quantity: 1 }]);
		}
	};

	const handleRemove = id => {
		const selectedProduct = cartList.filter(item => item.id !== id);
		setCartList(selectedProduct);
	};

	const handleChange = (e, id) => {
		const foundItem = cartList.map(item => {
			if (item.id === id) {
				item.quantity = Number(e.target.value);
			}
			return item;
		});
		setCartList(foundItem);
	};

	return (
		<div className="App">
			<div className="products">
				<h2>Shop</h2>
				<div className="product">
					{products.map(prod => (
						<Product
							key={prod.id}
							id={prod.id}
							img={prod.img}
							name={prod.name}
							price={prod.price}
							handleAddToCart={handleAddToCart}
						/>
					))}
				</div>
			</div>
			<Cart
				cartList={cartList}
				error={error}
				handleRemove={handleRemove}
				handleChange={handleChange}
			/>
		</div>
	);
};

export default App;
