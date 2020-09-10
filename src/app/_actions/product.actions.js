import { productConstants } from '../_constants';
import { productService } from '../_services';

export const productActions = {
    getAll,
    getProdById,
    addProduct,
    editProduct,
    deleteProduct,
    addProductSize,
    editProductSize,
    deleteProductSize,
    uploadImage
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
    return dispatch => new Promise(function(resolve, reject){
        dispatch(request());
        productService.getProdById(id)
            .then(product => { 
                dispatch(success(product));
                resolve(product);
            }).catch(error=>{
                dispatch(failure(error.toString()))
                reject(error);
            })
    });

    function request() { return { type: productConstants.GET_BY_ID_REQUEST } }
    function success(product) { return { type: productConstants.GET_BY_ID_SUCCESS, product } }
    function failure(error) { return { type: productConstants.GET_BY_ID_FAILURE, error } }
}

function addProduct(product) {
    return dispatch => {
        dispatch(request());
        productService.addProduct(product)
            .then(
                product => dispatch(success(product)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productConstants.POST_PRODUCT_REQUEST } }
    function success(product) { return { type: productConstants.POST_PRODUCT_SUCCESS, product } }
    function failure(error) { return { type: productConstants.POST_PRODUCT_FAILURE, error } }
}

function editProduct(product,productId) {
    return dispatch => {
        dispatch(request());
        productService.editProduct(product,productId)
            .then(
                product => dispatch(success(product)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productConstants.EDIT_PRODUCT_REQUEST } }
    function success(product) { return { type: productConstants.EDIT_PRODUCT_SUCCESS, product } }
    function failure(error) { return { type: productConstants.EDIT_PRODUCT_FAILURE, error } }
}

function deleteProduct(productId) {
    return dispatch => {
        dispatch(request());
        productService.deleteProduct(productId)
            .then(
                product => dispatch(success(product)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productConstants.DELETE_PRODUCT_REQUEST } }
    function success(product) { return { type: productConstants.DELETE_PRODUCT_SUCCESS, product } }
    function failure(error) { return { type: productConstants.DELETE_PRODUCT_FAILURE, error } }
}

function addProductSize(productSize) {
    return dispatch => {
        dispatch(request());
        productService.addProductSize(productSize)
            .then(
                productSize => dispatch(success(productSize)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productConstants.POST_PRODUCT_SIZE_REQUEST } }
    function success(productSize) { return { type: productConstants.POST_PRODUCT_SIZE_SUCCESS, productSize } }
    function failure(error) { return { type: productConstants.POST_PRODUCT_SIZE_FAILURE, error } }
}

function editProductSize(productSize,productSizeId) {
    return dispatch => {
        dispatch(request());
        productService.editProductSize(productSize,productSizeId)
            .then(
                productSize => dispatch(success(productSize)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productConstants.EDIT_PRODUCT_SIZE_REQUEST } }
    function success(productSize) { return { type: productConstants.EDIT_PRODUCT_SIZE_SUCCESS, productSize } }
    function failure(error) { return { type: productConstants.EDIT_PRODUCT_SIZE_FAILURE, error } }
}

function deleteProductSize(productSizeId) {
    return dispatch => {
        dispatch(request());
        productService.deleteProductSize(productSizeId)
            .then(
                productSize => dispatch(success(productSize)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productConstants.DELETE_PRODUCT_SIZE_REQUEST } }
    function success(productSize) { return { type: productConstants.DELETE_PRODUCT_SIZE_SUCCESS, productSize } }
    function failure(error) { return { type: productConstants.DELETE_PRODUCT_SIZE_FAILURE, error } }
}

function uploadImage(imageData) {
    return dispatch => {
        dispatch(request());
        productService.uploadImage(imageData)
            .then(
                imageData => dispatch(success(imageData)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: productConstants.POST_UPLOAD_IMAGE_REQUEST } }
    function success(imageData) { return { type: productConstants.POST_UPLOAD_IMAGE_SUCCESS, imageData } }
    function failure(error) { return { type: productConstants.POST_UPLOAD_IMAGE_FAILURE, error } }
}
