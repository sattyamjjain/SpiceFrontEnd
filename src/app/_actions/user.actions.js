import { userConstants } from '../_constants';
import { userService } from '../_services';

export const userActions = {
    login,
    register,
    getAll,
    getUser,
    postAddress,
    editAddress,
    editProfile,
    deleteAddress
};

function login(values) {
    return dispatch => new Promise(function(resolve, reject) {
        dispatch(request({ values}));

        userService.login(values.username, values.password)
            .then(user => { 
                dispatch(success(user));
                resolve(user);
            }).catch(error=>{
                dispatch(failure(error.toString()))
                reject(error);
            })
    });

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

 function register(user) {
    return dispatch => new Promise(function(resolve, reject){
        dispatch(request(user));
        
        userService.register(user)
            .then(user => { 
                dispatch(success(user));
                resolve(user);
            }).catch(error=>{
                dispatch(failure(error.toString()))
                reject(error);
            })
    });

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getUser(userId) {
    return dispatch => {
        dispatch(request());

        userService.getUser(userId)
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETUSER_REQUEST } }
    function success(user) { return { type: userConstants.GETUSER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GETUSER_FAILURE, error } }
}

function postAddress(address) {
    return dispatch => {
        dispatch(request());
        userService.postAddress(address)
            .then(
                address => dispatch(success(address)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.POST_ADDRESS_REQUEST } }
    function success(address) { return { type: userConstants.POST_ADDRESS_SUCCESS, address } }
    function failure(error) { return { type: userConstants.POST_ADDRESS_FAILURE, error } }
}

function editAddress(address,addressId) {
    return dispatch => {
        dispatch(request());
        userService.editAddress(address,addressId)
            .then(
                address => dispatch(success(address)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.EDIT_ADDRESS_REQUEST } }
    function success(address) { return { type: userConstants.EDIT_ADDRESS_SUCCESS, address } }
    function failure(error) { return { type: userConstants.EDIT_ADDRESS_FAILURE, error } }
}

function editProfile(user,userId) {
    return dispatch => {
        dispatch(request());
        userService.editProfile(user,userId)
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.EDIT_PROFILE_REQUEST } }
    function success(user) { return { type: userConstants.EDIT_PROFILE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.EDIT_PROFILE_FAILURE, error } }
}

function deleteAddress(addressId) {
    return dispatch => {
        dispatch(request());
        userService.deleteAddress(addressId)
            .then(
                address => dispatch(success(address)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.DELETE_ADDRESS_REQUEST } }
    function success(address) { return { type: userConstants.DELETE_ADDRESS_SUCCESS, address } }
    function failure(error) { return { type: userConstants.DELETE_ADDRESS_FAILURE, error } }
}