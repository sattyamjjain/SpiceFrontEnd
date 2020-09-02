import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        users: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case userConstants.GETUSER_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETUSER_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.GETUSER_FAILURE:
      return { 
        error: action.error
      };
    case userConstants.EDIT_PROFILE_REQUEST:
      return {
          loading: true
      };
    case userConstants.EDIT_PROFILE_SUCCESS:
        return {
            success:true
        };
    case userConstants.EDIT_PROFILE_FAILURE:
        return {
            error: action.error
        };
    case userConstants.POST_ADDRESS_REQUEST:
        return {
            loading: true
        };
    case userConstants.POST_ADDRESS_SUCCESS:
        return {
            success:true
        };
    case userConstants.POST_ADDRESS_FAILURE:
        return {
            error: action.error
        };
    case userConstants.EDIT_ADDRESS_REQUEST:
        return {
            loading: true
        };
    case userConstants.EDIT_ADDRESS_SUCCESS:
        return {
            success:true
        };
    case userConstants.EDIT_ADDRESS_FAILURE:
        return {
            error: action.error
        };
    case userConstants.DELETE_ADDRESS_REQUEST:
        return {
            loading: true
        };
    case userConstants.DELETE_ADDRESS_SUCCESS:
        return {
            success:true,
        };
    case userConstants.DELETE_ADDRESS_FAILURE:
        return {
            error: action.error
        };
    default:
      return state
  }
}