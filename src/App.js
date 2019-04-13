import React, { Component } from 'react';
import './App.css';

import Header from './containers/header/header';
import Home from './containers/home/home';
import addProduct from './containers/addProduct/addProduct';
import ProductDetails from './containers/product/ProductDetails';
import RegisterPage from './components/register';
import loginPage from './components/login';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/signup" exact component={RegisterPage}/>
					<Route path="/signin" exact component={loginPage}/>
					<Route path="/addProduct" exact component={addProduct} />
					<Route path="/:id" exact component={ProductDetails} />
				</Switch>
			</div>
		);
	}
}

export default App;
