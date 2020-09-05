import { productReviewConstants } from '../_constants';
import { productReviewService } from '../_services';

export const productReviewActions = {
    getAllReview,
    postReview,
    deleteReview
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

function deleteReview(reviewId) {
    return dispatch => {
        dispatch(request());
        productReviewService.deleteReview(reviewId)
            .then(
                review => dispatch(success(review)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productReviewConstants.DELETE_REVIEW_REQUEST } }
    function success(review) { return { type: productReviewConstants.DELETE_REVIEW_SUCCESS, review } }
    function failure(error) { return { type: productReviewConstants.DELETE_REVIEW_FAILURE, error } }
}