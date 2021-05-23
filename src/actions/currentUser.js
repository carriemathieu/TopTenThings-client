export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

// async action creators

export const login = credentials => {
    return dispatch => {
        return fetch("http://loclhost:3000/api/v1/login", {
            credentials: "include",
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

// credentials include = sends credentials to backend
export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
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