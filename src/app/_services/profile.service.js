import { authHeader } from '../_helpers';

export const profileService = {
    getUser
};

function getUser(userId) {
    const requestOptions = {
        method: 'GET',
        headers:authHeader()
    };

    return fetch(`http://localhost:8080/api/users/${userId}`, requestOptions).then(handleResponse);
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