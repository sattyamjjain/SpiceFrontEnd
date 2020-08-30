import { profileConstants } from '../_constants';
import { profileService } from '../_services';

export const profileActions = {
    getUser
};

function getUser(userId) {
    return dispatch => {
        dispatch(request());
        profileService.getUser(userId)
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: profileConstants.GET_USER_REQUEST } }
    function success(user) { return { type: profileConstants.GET_USER_SUCCESS, user } }
    function failure(error) { return { type: profileConstants.GET_USER_FAILURE, error } }
}