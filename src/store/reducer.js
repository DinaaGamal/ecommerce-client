import * as actionTypes from './actions';

const initialState = {
	products: [],
	selectedProduct: {}
};

const reducer = (state = initialState, action) => {
	const productsArray = [...state.products];
	switch (action.type) {
		case actionTypes.GETALL:
			const newArray = [];
			for (const key in action.products) {
				newArray.push({
					name:action.products[key].name,
					description:action.products[key].desacription,
					category:action.products[key].category,
					price:action.products[key].price,
					discount:action.products[key].discount,
					isOnSale:action.products[key].isOnSale,
					userid:action.products[key].userid,
					image:action.products[key].image,
					id:action.products[key]._id
				})
				
			}
			return {
				...state,
				products: newArray
			};

			case actionTypes.SHOW_PRODUCT_DETAILS:
			console.log(action.product);
			 return{
				 ...state,
				 selectedProduct: action.product
			 }
			 case actionTypes.REMOVE_PRODUCT:
			const index = productsArray.findIndex(p => p.id === action.product._id)
			 if(index > -1)
			{
				productsArray.splice(index,1);
			}
			 return {
				...state,
				products: productsArray
			};
			case actionTypes.ADD_PRODUCT:
			let productsCopy = [...state.products];
			productsCopy.push(action.product);
			return{
				...state,
				products:productsCopy,
			}
		default:
			return state;
	}
};
export default reducer;
