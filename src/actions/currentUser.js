import { getCategories } from './allCategories'
import { getLists } from './allLists'
import { resetLoginForm } from './loginForm'
import { resetSignUpForm } from './signUp'

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
export const login = (credentials, history) => {
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
                dispatch(resetLoginForm())
                // redirects user to home page
                history.push('/lists')
            }
        })
        .catch(err => console.log(err))
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch("http://localhost:3000/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(resetSignUpForm())
                history.push('/')
            }
        })
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        // dispatch(clearLists())
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
                dispatch(getLists())
                dispatch(getCategories())
            }
        })
        .catch(err => console.log(err))
    }
}
