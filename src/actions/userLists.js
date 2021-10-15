import { resetNewListForm } from "./listForm"

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

export const addList = list => {
    console.log("add list action to dispatch")
    return {
        type: "ADD_LIST",
        list
    }
}

export const updateListState = list => {
    return {
        type: "UPDATE_LIST",
        list
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

export const createList = (listData, history) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/lists", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(listData)
        }) 
        .then(resp => resp.json())
        .then(response => {
            if(response.error){
                alert(response.error)
            } else { 
                console.log("create list action")
                dispatch(addList(response.data))
                dispatch(resetNewListForm())
                history.push(`/lists/${response.data.id}`)
            }
        })
        .catch(err => console.log(err))
    }
}

export const updateList = (listData, history) => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/lists/${listData.listId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(listData)
        }) 
        .then(resp => resp.json())
        .then(response => {
            if(response.error){
                alert(response.error)
            } else { 
                dispatch(updateListState(response.data))
                history.push(`/lists/${response.data.id}`)
            }
        })
        .catch(err => console.log(err))
    }
}

export const deleteListSuccess = listId => {
    console.log("delete list action")
    return {
        type: "DELETE_LIST",
        listId
    }
}

export const deleteList = (listId, history) => {
    console.log("deleteList action")
    return dispatch => {
        console.log(listId)
        return fetch(`http://localhost:3000/api/v1/lists/${listId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }) 
        .then(resp => resp.json())
        .then(response => {
            if(response.error){
                alert(response.error)
            } else { 
                dispatch(deleteListSuccess(listId))
                history.push(`/lists`)
            }
        })
        .catch(err => console.log(err))
    }
}