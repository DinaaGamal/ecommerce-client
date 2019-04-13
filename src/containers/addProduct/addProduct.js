import React, { Component } from 'react';
import product from '../../assets/img/products/product-grey-7.jpg'
import * as actionType from '../../store/actions';
import {connect} from 'react-redux';

class AddProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
				image:'',
				name: '',
				description: '',
				price:'',
				discount:'',
				category:'',
				// paymentTypes: [],
				isOnSale: false,
		};
		this.addNewProduct = this.addNewProduct.bind(this);
	  }
	  addNewProduct(event){
		event.preventDefault();
		console.log();
		this.props.addProduct(this.state);
	  }

	  handleChange = (key,value) => {
			this.setState({[key]:value})
	  };
	  
	//   change = (event) => {
	// 		let newState = {...this.state};
	// 		newState[event.target.name] = event.target.value;
	// 		this.setState({product: newState}); 
	//   }

	  saleChanged = (event) => {
		  if(event.target.value === "isOnSale")
		  {
			  this.setState({
				  ...this.state,
				  isOnSale: true
			  })
		  }
		  else
		  {
			this.setState({
				...this.state,
				isOnSale: false
			})
		  }
	  }
	render() {
		return(
			<div className="add-product container">
			<form action="" onSubmit ={this.handleSubmit}>
				<div className="add-product__data">
					<div className="form-controls">
						<section className="tabs">
							<div className="tabs__headers">
								<div className="tabs__header active">
									English
								</div>
								<div className="tabs__header">
									Arabic
								</div>
							</div>
							<div className="tabs__bodies">
								<div className="tabs__body active">
								<div className="form-group">
										<label for="">Image URL</label>
										<input className="form-control" type="text" 
										value={this.state.value}
										onChange={(event)=>this.handleChange(event.target.name,event.target.value)} name="image" id=""/>
									</div>
									<div className="form-group">
										<label for="">Name</label>
										<input className="form-control" type="text" 
										value={this.state.value}
										onChange={(event)=>this.handleChange(event.target.name,event.target.value)} name="name" id=""/>
									</div>
									<div className="form-group">
										<label for="">Description</label>
										<textarea className="form-control" value={this.state.value} 
										onChange={(event)=>this.handleChange(event.target.name , event.target.value)} name="description" id="" cols="30" rows="4"></textarea>
									</div>
								</div>
								<div className="tabs__body ">
									<div className="form-group invalid">
										<label for="">Name</label>
										<input className="form-control" type="text" name="" id=""/>
									</div>
									<div className="form-group">
										<label for="">Description</label>
										<textarea className="form-control" name="" id="" cols="30" rows="4"></textarea>
									</div>
								</div>
							</div>
						</section>
	
						<div className="form-group">
							<label for="">Price</label>
							<input className="form-control" type="text" name="price" id=""
							value={this.state.value}
							onChange={(event)=>this.handleChange( event.target.name , event.target.value )} />
						</div>
						<div className="add-product__discount">
							<div className="form-group">
								<label for="">Satus</label>
								<div className="form-group__radios">
									<div className="form-group__radio"><input type="radio" name="toggleDiscountOptions" value="isOnSale" onChange={this.saleChanged} checked={this.state.isOnSale}/><span>On Sale</span></div>
									<div className="form-group__radio"><input type="radio" name="toggleDiscountOptions" value="isNotOnSale" onChange={this.saleChanged} checked={!this.state.isOnSale}/><span>Not On Sale</span></div>
								</div>
							</div>
							<div className="form-group">
								<label for="">Discount</label>
								<input className="form-control" type="text" name=""  disabled={!this.state.isOnSale}/>
							</div>
						</div>
						<div className="form-group">
							<label for="">Payment Types</label>
							<div className="form-group__checkboxs">
								<div className="form-group__checkbox"><input type="checkbox" onChange={this.paymentChanged} name="Direct Bank"/><span>Direct Bank
										Transfare</span></div>
								<div className="form-group__checkbox"><input type="checkbox" onChange={this.paymentChanged} name="Cheque Payment" /><span>Cheque Payment</span></div>
								<div className="form-group__checkbox"><input type="checkbox" onChange={this.paymentChanged} name="Paypal" /><span>Paypal</span></div>
								<div className="form-group__checkbox"><input type="checkbox" onChange={this.paymentChanged} name="Visa" /><span>Visa</span></div>
								<div className="form-group__checkbox"><input type="checkbox" onChange={this.paymentChanged} name="Mastercard" /><span>Mastercard</span></div>
								<div className="form-group__checkbox"><input type="checkbox" onChange={this.paymentChanged} name="On Dilivery" /><span>On Dilivery</span></div>
							</div>
						</div>
						<div className="form-group">
							<label for="">Category</label>
							<select className="form-control" value={this.state.category} name="category" onChange={(event)=> {this.handleChange(event.target.name, event.target.value)}}>
								<option value="Arts & Crafts">Arts & Crafts</option>
								<option value="Automotive">Automotive</option>
								<option value="Baby">Baby</option>
								<option value="Books">Books</option>
								<option value="Eletronics">Eletronics</option>
								<option value="Women's Fashion">Women's Fashion</option>
								<option value="Men's Fashion">Men's Fashion</option>
								<option value="Health & Household">Health & Household</option>
								<option value="Home & Kitchen">Home & Kitchen</option>
								<option value="Military Accessories">Military Accessories</option>
								<option value="Movies & Television">Movies & Television</option>
								<option value="Sports & Outdoors">Sports & Outdoors</option>
								<option value="Tools & Home Improvement">Tools & Home Improvement</option>
								<option value="Toys & Games">Toys & Games</option>
							</select>
						</div>
	
						<div className="taged-textbox form-group">
							<label className="taged-textbox__lable" for="">Tags</label>
							<div className="taged-textbox__data">
								<div className="taged-textbox__tags">
									<div className="taged-textbox__tag"><span>tag1</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag2</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag3</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag4</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag5</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag6</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag7</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag8</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag9</span><a href="#" className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
									<div className="taged-textbox__tag"><span>tag10</span><a className="taged-textbox__remove"><i
												className="fas fa-times"></i></a></div>
								</div>
								<div className="taged-textbox__clear">
									<a href="#"><i className="fas fa-times"></i></a>
								</div>
							</div>
							<input className="taged-textbox__textbox form-control" type="text" name="" id=""/>
						</div>
						<div className="add-product__actions">
							<button href="#" className="btn btn--gray">Cancel</button>
							<button onClick={this.addNewProduct}  className="btn btn--primary">Add</button>
						</div>
					</div>
				</div>
			</form>
		</div>
		)

	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addProduct : (product)=> dispatch(actionType.addProductToList(product))
	}
}
export default connect(null, mapDispatchToProps)(AddProduct);
