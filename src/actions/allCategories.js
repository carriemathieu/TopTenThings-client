// sync actions
export const setAllCategories = categories => {
    console.log("action creator")
    return {
        type: "SET_ALL_CATEGORIES",
        categories
    }
}

// async actions
export const getCategories = () => {
    // debugger
    // console.log("getcategories")
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
                console.log("api response:", response)
                dispatch(setAllCategories(response))
            }
        })
        .catch(err => console.log(err))
    }
}