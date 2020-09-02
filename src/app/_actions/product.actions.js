import { productConstants } from '../_constants';
import { productService } from '../_services';

export const productActions = {
    getAll,
    getProdById
};

function getAll() {
    return dispatch => {
        dispatch(request());
        productService.getAll()
            .then(
                products => dispatch(success(products)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productConstants.GETALL_REQUEST } }
    function success(products) { return { type: productConstants.GETALL_SUCCESS, products } }
    function failure(error) { return { type: productConstants.GETALL_FAILURE, error } }
}

function getProdById(id) {
    return dispatch => {
        dispatch(request());
        productService.getProdById(id)
            .then(
                product => dispatch(success(product)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productConstants.GET_BY_ID_REQUEST } }
    function success(product) { return { type: productConstants.GET_BY_ID_SUCCESS, product } }
    function failure(error) { return { type: productConstants.GET_BY_ID_FAILURE, error } }
}