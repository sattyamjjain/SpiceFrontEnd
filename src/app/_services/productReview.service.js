export const productReviewService = {
    getAllReview,
    postReview
};

function getAllReview() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`http://localhost:8080/api/review`, requestOptions).then(handleResponse);
}

function postReview(review) {
    console.log('review service',review)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    };

    return fetch(`http://localhost:8080/api/review`, requestOptions).then(handleResponse);
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