export const productService = {
    getAll,
    getProdById,
    addProduct,
    editProduct,
    deleteProduct,
    addProductSize,
    editProductSize,
    deleteProductSize
};

function getAll() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`http://localhost:8080/api/product`, requestOptions).then(handleResponse);
}

function getProdById(productId) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`http://localhost:8080/api/product/${productId}`, requestOptions).then(handleResponse);
}

function addProduct(product) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };

    return fetch(`http://localhost:8080/api/product`, requestOptions).then(handleResponse);
}

function editProduct(product,productId) {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };

    return fetch(`http://localhost:8080/api/product/${productId}`, requestOptions).then(handleResponse);
}

function deleteProduct(productId) {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json' }
    };

    return fetch(`http://localhost:8080/api/product/${productId}`, requestOptions).then(handleResponse);
}

function addProductSize(productSize) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productSize)
    };

    return fetch(`http://localhost:8080/api/product-desc`, requestOptions).then(handleResponse);
}

function editProductSize(productSize,productSizeId) {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(productSize)
    };

    return fetch(`http://localhost:8080/api/product-desc/${productSizeId}`, requestOptions).then(handleResponse);
}


function deleteProductSize(productSizeId) {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json' }
    };

    return fetch(`http://localhost:8080/api/product-desc/${productSizeId}`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}