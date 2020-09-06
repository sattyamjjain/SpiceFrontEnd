import { authHeader } from '../_helpers';

export const userService = {
    login,
    adminLogin,
    register,
    getAll,
    getUser,
    postAddress,
    editAddress,
    editProfile,
    deleteAddress
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://localhost:8080/api/auth/signin`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isAuthenticated',true)
            return user;
        });
}

function adminLogin(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://localhost:8080/api/auth/signin`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('admin', JSON.stringify(user));
            localStorage.setItem('isAdminAuthenticated',true)
            return user;
        });
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        // headers: authHeader()
    };

    return fetch(`http://localhost:8080/api/users`, requestOptions).then(handleResponse);
}

function getUser(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:8080/api/users/${id}`, requestOptions).then(handleResponse);
}

function postAddress(address) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(address)
    };

    return fetch(`http://localhost:8080/api/users/address`, requestOptions).then(handleResponse);
}

function editAddress(address,addressId) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(address)
    };

    return fetch(`http://localhost:8080/api/users/address/${addressId}`, requestOptions).then(handleResponse);
}

function deleteAddress(addressId) {
    const requestOptions = {
        method: 'DELETE',
        headers: {...authHeader(), 'Content-Type': 'application/json' }
    };

    return fetch(`http://localhost:8080/api/users/address/${addressId}`, requestOptions).then(handleResponse);
}

function editProfile(user,userId) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`http://localhost:8080/api/users/${userId}`, requestOptions).then(handleResponse);
}


function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`http://localhost:8080/api/auth/signup`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}