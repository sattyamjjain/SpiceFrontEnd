export const productReviewService = {
    getAllReview,
    postReview,
    deleteReview
};

function getAllReview() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`http://localhost:8080/api/review`, requestOptions).then(handleResponse);
}

function postReview(review) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    };

    return fetch(`http://localhost:8080/api/review`, requestOptions).then(handleResponse);
}

function deleteReview(reviewId) {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json' }
    };

    return fetch(`http://localhost:8080/api/review/${reviewId}`, requestOptions).then(handleResponse);
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