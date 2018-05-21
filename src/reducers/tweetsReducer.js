export default function reducer(
    state = {
        tweets: [],
        fetching: false,
        fetched: false,
        error: null,
    },
    action
) {
    switch (action.type) {
        case "fetch_tweet_PENDING": {
            return { ...state, fetching: true }
            break;
        }
        case "fetch_tweet_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                tweets: action.payload.data,
            }
            break;
        }
        case "fetch_tweet_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
            break;
        }

        case "add_tweet": {
            const newTweets = [...state.tweets];
            const added_tweet = { "id": action.payload.id, "title": action.payload.text };
            newTweets.push(added_tweet);

            return {
                ...state,
                tweets: newTweets,
            }
        }

        case "update_tweet": {
            const { id, text } = action.payload;
            const newTweets = [...state.tweets];
            const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id);
            newTweets[tweetToUpdate].title = text;

            return {
                ...state,
                tweets: newTweets,
            }
        }

        case "delete_tweet": {
            return {
                ...state,
                tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
            }
        }
    }
    return state;
}

