import { authHeader } from '../_helpers';
import axios from 'axios'

export const wishlistService = {
    getAll
};

function getAll(userId) {
    const requestOptions = {
        method: 'GET',
        headers:authHeader()
    };

    return fetch(`http://localhost:8080/api/users/${userId}/wishlist`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log('handleresponse',data)
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
