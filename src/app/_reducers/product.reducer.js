import {
    productConstants
} from '../_constants';

const initialState={
    loading:null,
    products:null,
    product:null,
    error:null
}

export function product(state = initialState, action) {
    console.log('actions',action)
    switch (action.type) {
        // case productConstants.GETALL_REQUEST:
        //     return Object.assign({}, state, {
        //         loading: true
        //       });
        // case productConstants.GETALL_SUCCESS:
        //     return Object.assign({}, state, {
        //         product:state.product,
        //         products: action.products
        //       });
        // case productConstants.GETALL_FAILURE:
        //     return Object.assign({}, state, {
        //         error:action.error
        //       });
        case productConstants.GET_BY_ID_REQUEST:
            return Object.assign({}, state, {
                loading:true
              });
        case productConstants.GET_BY_ID_SUCCESS:
            return Object.assign({}, state, {
                product:action.product,
              });
        case productConstants.GET_BY_ID_FAILURE:
            return Object.assign({}, state, {
                error:action.error
              });
        default:
            return state
    }
}