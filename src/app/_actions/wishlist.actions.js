import { wishlistConstants } from '../_constants';
import { wishlistService } from '../_services';
import { history } from '../_helpers';

export const wishlistActions = {
    getAll
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