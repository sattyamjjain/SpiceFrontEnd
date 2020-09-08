import { cartConstants } from '../_constants';
import { cartService } from '../_services';

export const cartActions = {
    getAllById,
    postCart,
    deleteCart
};

function getAllById(id) {
    return dispatch => new Promise(function(resolve, reject){
        dispatch(request());
        cartService.getAllById(id)
            .then(carts => { 
                dispatch(success(carts));
                resolve(carts);
            }).catch(error=>{
                dispatch(failure(error.toString()))
                reject(error);
            })
    });

    function request() { return { type: cartConstants.GETALL_REQUEST } }
    function success(carts) { return { type: cartConstants.GETALL_SUCCESS, carts } }
    function failure(error) { return { type: cartConstants.GETALL_FAILURE, error } }
}

function postCart(cart) {
    return dispatch => new Promise(function(resolve, reject){
        dispatch(request());
        cartService.postCart(cart)
            .then(cart => { 
                dispatch(success(cart));
                resolve(cart);
            }).catch(error=>{
                dispatch(failure(error.toString()))
                reject(error);
            })
    });

    function request() { return { type: cartConstants.POST_CART_REQUEST } }
    function success(cart) { return { type: cartConstants.POST_CART_SUCCESS, cart } }
    function failure(error) { return { type: cartConstants.POST_CART_FAILURE, error } }
}

function deleteCart(cartId) {
    return dispatch => {
        dispatch(request());
        cartService.deleteCart(cartId)
            .then(
                cart => dispatch(success(cart)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: cartConstants.DELETE_CART_REQUEST } }
    function success(cart) { return { type: cartConstants.DELETE_CART_SUCCESS, cart } }
    function failure(error) { return { type: cartConstants.DELETE_CART_FAILURE, error } }
}
