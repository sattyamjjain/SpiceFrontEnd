import {
    profileConstants
} from '../_constants';

const initialState={
    loading:null,
    user:null,
    error:null
}

export function profile(state = initialState, action) {
    console.log('actions',action)
    switch (action.type) {
        case profileConstants.GET_USER_REQUEST:
            return Object.assign({}, state, {
                loading:true
              });
        case profileConstants.GET_USER_SUCCESS:
            return Object.assign({}, state, {
                user:action.user,
              });
        case profileConstants.GET_USER_FAILURE:
            return Object.assign({}, state, {
                error:action.error
              });
        default:
            return state
    }
}