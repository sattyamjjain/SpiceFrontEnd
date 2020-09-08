import {
    cartConstants
} from '../_constants';

const initialState={
    loading:null,
    carts:null,
    error:null
}

export function cart(state = initialState, action) {
    switch (action.type) {
        case cartConstants.GETALL_REQUEST:
            return Object.assign({}, state, {
                loading: true
              });
        case cartConstants.GETALL_SUCCESS:
            return Object.assign({}, state, {
                carts: action.carts
              });
        case cartConstants.GETALL_FAILURE:
            return Object.assign({}, state, {
                error:action.error
              });
        case cartConstants.POST_CART_REQUEST:
            return {
                loading: true
            };
        case cartConstants.POST_CART_SUCCESS:
            return {
                success:true
            };
        case cartConstants.POST_CART_FAILURE:
            return {
                error: action.error
            };
        case cartConstants.DELETE_CART_REQUEST:
            return {
                loading: true
            };
        case cartConstants.DELETE_CART_SUCCESS:
            return {
                success:true,
            };
        case cartConstants.DELETE_CART_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}