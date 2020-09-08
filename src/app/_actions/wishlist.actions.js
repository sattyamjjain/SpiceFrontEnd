import { wishlistConstants } from '../_constants';
import { wishlistService } from '../_services';

export const wishlistActions = {
    getAllById,
    postWishlist,
    deleteWishlist
};

function getAllById(id) {
    return dispatch => new Promise(function(resolve, reject){
        dispatch(request());
        wishlistService.getAllById(id)
            .then(wishlists => { 
                dispatch(success(wishlists));
                resolve(wishlists);
            }).catch(error=>{
                dispatch(failure(error.toString()))
                reject(error);
            })
    });

    function request() { return { type: wishlistConstants.GETALL_REQUEST } }
    function success(wishlists) { return { type: wishlistConstants.GETALL_SUCCESS, wishlists } }
    function failure(error) { return { type: wishlistConstants.GETALL_FAILURE, error } }
}

function postWishlist(wishlist) {
    return dispatch => new Promise(function(resolve, reject){
        dispatch(request());
        wishlistService.postWishlist(wishlist)
        .then(wishlist => { 
            dispatch(success(wishlist));
            resolve(wishlist);
        }).catch(error=>{
            dispatch(failure(error.toString()))
            reject(error);
        })
    });

    function request() { return { type: wishlistConstants.POST_WISHLIST_REQUEST } }
    function success(wishlist) { return { type: wishlistConstants.POST_WISHLIST_SUCCESS, wishlist } }
    function failure(error) { return { type: wishlistConstants.POST_WISHLIST_FAILURE, error } }
}

function deleteWishlist(wishlistId) {
    return dispatch => {
        dispatch(request());
        wishlistService.deleteWishlist(wishlistId)
            .then(
                wishlist => dispatch(success(wishlist)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: wishlistConstants.DELETE_WISHLIST_REQUEST } }
    function success(wishlist) { return { type: wishlistConstants.DELETE_WISHLIST_SUCCESS, wishlist } }
    function failure(error) { return { type: wishlistConstants.DELETE_WISHLIST_FAILURE, error } }
}