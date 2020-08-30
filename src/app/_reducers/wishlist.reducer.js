import {
    wishlistConstants
} from '../_constants';

const initialState={
    loading:null,
    wishlists:null,
    error:null
}

export function wishlist(state = initialState, action) {
    console.log('actions',action)
    switch (action.type) {
        case wishlistConstants.GETALL_REQUEST:
            return Object.assign({}, state, {
                loading: true
              });
        case wishlistConstants.GETALL_SUCCESS:
            return Object.assign({}, state, {
                wishlists: action.wishlists
              });
        case wishlistConstants.GETALL_FAILURE:
            return Object.assign({}, state, {
                error:action.error
              });
        default:
            return state
    }
}