import React, { Component } from 'react';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import { products } from './utils/product';
export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = { cartList: [] };
		this.handleAddToCart = this.handleAddToCart.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.setState({
			cartList: JSON.parse(localStorage.getItem('products')) || [],
		});
	}

	componentDidUpdate() {
		this.setState(
			localStorage.setItem('products', JSON.stringify(this.state.cartList))
		);
	}

	handleAddToCart(id) {
		const cartList = this.state.cartList;
		const selectedProduct = { ...products.find(item => item.id === id) };
		const index = cartList.findIndex(item => item.id === id);
		if (index !== -1) {
			const foundItem = cartList.map(item => {
				if (item.id === id && item.quantity < 10) {
					item.quantity = Number(item.quantity) + 1;
				}
				return item;
			});
			this.setState({ cartList: foundItem });
		} else {
			this.setState(prevVal => ({
				cartList: [...prevVal.cartList, { ...selectedProduct, quantity: 1 }],
			}));
		}
	}

	handleRemove(id) {
		const cartList = this.state.cartList;
		const selectedProduct = cartList.filter(item => item.id !== id);
		this.setState({ cartList: selectedProduct });
	}

	handleChange(e, id) {
		const cartList = this.state.cartList;
		const foundItem = cartList.map(item => {
			if (item.id === id) {
				item.quantity = Number(e.target.value);
			}
			return item;
		});
		this.setState({ cartList: foundItem });
	}

	render() {
		const { cartList } = this.state;

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
								handleAddToCart={this.handleAddToCart}
							/>
						))}
					</div>
				</div>
				<Cart
					cartList={cartList}
					handleRemove={this.handleRemove}
					handleChange={this.handleChange}
				/>
			</div>
		);
	}
}
