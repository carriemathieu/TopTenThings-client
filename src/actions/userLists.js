// sync actions //
export const setUserLists = lists => {
    return {
        type: "SET_USER_LISTS",
        lists
    }
}

// include in myLists -> clear after user logs out
export const clearLists = () => {
    return {
        type: "CLEAR_LISTS"
    }
}

// async actions //
export const getUserLists = () => {
    // return dispatch => {
    //     return fetch("http://localhost:3000/api/v1/lists", {
    //         credentials: "include",
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     })
    //     .then(resp => resp.json())
    //     .then(response => {
    //         if (response.error) {
    //             alert(response.error)
    //         } else {
    //             dispatch(setUserLists(response.data))
    //         }
    //     })
    //     .catch(console.log)
    // }
}