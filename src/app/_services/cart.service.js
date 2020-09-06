import { authHeader } from '../_helpers';

export const cartService = {
    getAllById,
    postCart,
};

function getAllById(userId) {
    const requestOptions = {
        method: 'GET',
        headers:authHeader()
    };

    return fetch(`http://localhost:8080/api/users/${userId}/cart`, requestOptions).then(handleResponse);
}

function postCart(cart) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(),  'Content-Type': 'application/json' },
        body: JSON.stringify(cart)
    };

    return fetch(`http://localhost:8080/api/users/cart`, requestOptions).then(handleResponse);
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
