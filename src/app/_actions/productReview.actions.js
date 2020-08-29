import { productReviewConstants } from '../_constants';
import { productReviewService } from '../_services';
import { history } from '../_helpers';

export const productReviewActions = {
    getAllReview,
    postReview
};

function getAllReview() {
    return dispatch => {
        dispatch(request());
        productReviewService.getAllReview()
            .then(
                reviews => dispatch(success(reviews)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productReviewConstants.GETALL_REQUEST } }
    function success(reviews) { return { type: productReviewConstants.GETALL_SUCCESS, reviews } }
    function failure(error) { return { type: productReviewConstants.GETALL_FAILURE, error } }
}

function postReview(review) {
    return dispatch => {
        dispatch(request());
        productReviewService.postReview(review)
            .then(
                reviews => dispatch(success(reviews)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productReviewConstants.POST_REQUEST } }
    function success(reviews) { return { type: productReviewConstants.POST_SUCCESS, reviews } }
    function failure(error) { return { type: productReviewConstants.POST_FAILURE, error } }
}
