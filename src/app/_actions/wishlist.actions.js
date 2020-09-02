import { wishlistConstants } from '../_constants';
import { wishlistService } from '../_services';

export const wishlistActions = {
    getAll,
    postWishlist
};

function getAll(id) {
    return dispatch => {
        dispatch(request());
        wishlistService.getAll(id)
            .then(
                wishlists => dispatch(success(wishlists)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: wishlistConstants.GETALL_REQUEST } }
    function success(wishlists) { return { type: wishlistConstants.GETALL_SUCCESS, wishlists } }
    function failure(error) { return { type: wishlistConstants.GETALL_FAILURE, error } }
}

function postWishlist(wishlist) {
    return dispatch => {
        dispatch(request());
        wishlistService.postWishlist(wishlist)
            .then(
                wishlist => dispatch(success(wishlist)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: wishlistConstants.POST_WISHLIST_REQUEST } }
    function success(wishlist) { return { type: wishlistConstants.POST_WISHLIST_SUCCESS, wishlist } }
    function failure(error) { return { type: wishlistConstants.POST_WISHLIST_FAILURE, error } }
}