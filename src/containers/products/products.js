import React, { Component } from 'react';
import Product from '../product/product';
import ListingTools from '../listingTool/listingtool';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'


class Products extends Component {
	constructor(props){
		super(props);
		this.state = {
			prdcts:[]
		}
	}
	componentDidMount(){
		this.props.getAll()
	}
	render() {
		let products = this.props.prdcts.map((prdct) => {
			return (
				<Product
					key={prdct.id}
					product= {prdct}
				/>
			);
		});
		return (
			<section className="item-listing">
				<ListingTools />
				<div className="item-listing__items item-listing--3items">{products}</div>
				<div class="paging">
                <div class="paging__arrow">
                    <i class="fas fa-angle-left"></i>
                </div>
                <div class="paging__arrow">
                    <i class="fas fa-angle-right"></i>
                </div>
            </div>
			</section>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		prdcts: state.products,
	};
};

const mapDispatchToProps = (dispatch) => {
	return{
		getAll : ()=> dispatch(actionTypes.GetAllProduct())
	}
};
export default connect(mapStateToProps,mapDispatchToProps)(Products);
