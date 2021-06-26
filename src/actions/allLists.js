// sync actions
export const setAllLists = lists => {
    return {
        type: "SET_ALL_LISTS",
        lists
    }
}

// include in myLists -> clear after user logs outß
export const clearLists = () => {
    return {
        type: "CLEAR_LISTS"
    }
}

// async actions
export const getLists = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/lists", {
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
                dispatch(setAllLists(response.data))
            }
        })
        .catch(console.log)
    }
}