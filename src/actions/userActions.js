

export function fetchUser() {
    return {
        type: "fetch_user_FULFILLED",
        payload: {
            name: "will",
            age:35,
        }
    }
}

export function setUserName(name) {
    return {
        type: "set_user_name",
        payload:name,
    }
}

export function setUserAge(age) {
    return {
        type: "set_user_age",
        payload:age,
    }
}