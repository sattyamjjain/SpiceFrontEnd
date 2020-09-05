import {
    productConstants
} from '../_constants';

const initialState={
    loading:null,
    products:null,
    product:null,
    error:null,
    success:false
}

export function product(state = initialState, action) {
    switch (action.type) {
        case productConstants.GETALL_REQUEST:
            return {
                loading: true
              };
        case productConstants.GETALL_SUCCESS:
            return {
                product: state.product,
                products: action.products
              };
        case productConstants.GETALL_FAILURE:
            return {
                error:action.error
              };
        case productConstants.GET_BY_ID_REQUEST:
            return {
                loading:true
              };
        case productConstants.GET_BY_ID_SUCCESS:
            return {
                products: state.products,
                product:action.product,
              };
        case productConstants.GET_BY_ID_FAILURE:
            return {
                error:action.error
              };
        case productConstants.POST_PRODUCT_REQUEST:
            return {
                loading: true
            };
        case productConstants.POST_PRODUCT_SUCCESS:
            return {
                ...state,
                success:true
              };
        case productConstants.POST_PRODUCT_FAILURE:
            return {
                error: action.error
            };
        case productConstants.EDIT_PRODUCT_REQUEST:
            return {
                loading: true
            };
        case productConstants.EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                success:true
            };
        case productConstants.EDIT_PRODUCT_FAILURE:
            return {
                error: action.error
            };
        case productConstants.DELETE_PRODUCT_REQUEST:
            return {
                loading: true
            };
        case productConstants.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                success:true,
            };
        case productConstants.DELETE_PRODUCT_FAILURE:
            return {
                error: action.error
            };
        case productConstants.POST_PRODUCT_SIZE_REQUEST:
            return {
                loading: true
            };
        case productConstants.POST_PRODUCT_SIZE_SUCCESS:
            return {
                ...state,
                success:true
                };
        case productConstants.POST_PRODUCT_SIZE_FAILURE:
            return {
                error: action.error
            };
        case productConstants.EDIT_PRODUCT_SIZE_REQUEST:
            return {
                loading: true
            };
        case productConstants.EDIT_PRODUCT_SIZE_SUCCESS:
            return {
                ...state,
                success:true
            };
        case productConstants.EDIT_PRODUCT_SIZE_FAILURE:
            return {
                error: action.error
            };
        case productConstants.DELETE_PRODUCT_SIZE_REQUEST:
            return {
                loading: true
            };
        case productConstants.DELETE_PRODUCT_SIZE_SUCCESS:
            return {
                ...state,
                success:true,
            };
        case productConstants.DELETE_PRODUCT_SIZE_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}