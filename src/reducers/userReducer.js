export default function reducer(
    state = {
        user: {
            id: null,
            name: null,
            age:null,
        },
        fetching: false,
        fetched: false,
        error: null,
    },
    action
) {
    switch (action.type) {
        case "fetch_user_PENDING": {
            return { ...state, fetching: true }
            break;
        }
        case "fetch_user_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload,
            }
            break;
        }
        case "fetch_user_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
            break;
        }
        case "set_user_name": {

            return {
                ...state,
                user: { ...state.user, name: action.payload },
            }
        }

        case "set_user_age": {

            return {
                ...state,
                user: { ...state.user, age: action.payload },
            }
        }
    }
    return state;
}

