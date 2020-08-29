import {
    productReviewConstants
} from '../_constants';

export function productReview(state = {}, action) {
    switch (action.type) {
        case productReviewConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case productReviewConstants.GETALL_SUCCESS:
            return {
                reviews: action.reviews
            };
        case productReviewConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case productReviewConstants.POST_REQUEST:
            return {
                loading: true
            };
        case productReviewConstants.POST_SUCCESS:
            return {
                success:true
            };
        case productReviewConstants.POST_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}