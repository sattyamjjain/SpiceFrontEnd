import {
    productConstants
} from '../_constants';

export function product(state = {}, action) {
    switch (action.type) {
        case productConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case productConstants.GETALL_SUCCESS:
            return {
                products: action.products
            };
        case productConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case productConstants.GET_BY_ID_REQUEST:
            return {
                loading: true
            };
        case productConstants.GET_BY_ID_SUCCESS:
            return {
                product: action.product
            };
        case productConstants.GET_BY_ID_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}