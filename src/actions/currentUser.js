export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

// async action creators
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                // dispatches -> action creator{type: "SET_CURRENT_USER", user: user }, user as arg
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }
}