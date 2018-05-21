import axios from 'axios';

export function fetchTweets() {
    return {
        type: "fetch_tweet",
        payload: axios.get("https://jsonplaceholder.typicode.com/posts")
    }
}

export function addTweet(id, text) {
    return {
        type: "add_tweet",
        payload:{
            id,
            text,
        },
    }
}

export function updateTweet(id, text) {
    return {
        type: "update_tweet",
        payload: {
            id,
            text,
        },
    }
}