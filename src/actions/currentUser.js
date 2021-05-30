import { resetLoginForm } from './loginForm'
import {getLists} from './allLists'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

// clears current user from redux store
export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// async action creators

export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                // dispatches -> action creator{type: "SET_CURRENT_USER", user: user }, user as arg
                dispatch(setCurrentUser(response))
                dispatch(getLists())
                dispatch(resetLoginForm())
            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch("http://localhost:3000/api/v1/logout", {
            credentials: "include",
            method: "DELETE"
        })
    }
}

// credentials include = sends credentials to backend w cookies
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
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                // dispatches -> action creator{type: "SET_CURRENT_USER", user: user }, user as arg
                dispatch(setCurrentUser(response.data))
            }
        })
        .catch(console.log)
    }
}
