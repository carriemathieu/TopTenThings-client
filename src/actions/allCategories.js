// sync actions
export const setAllCategories = categories => {
    return {
        type: "SET_ALL_CATEGORIES",
        categories
    }
}

// async actions
export const getCategories = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/categories", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setAllCategories(response))
            }
        })
        .catch(err => console.log(err))
    }
}