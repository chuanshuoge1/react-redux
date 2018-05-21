import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, setUserName, setUserAge } from './actions/userActions';
import { fetchTweets, addTweet, updateTweet } from './actions/tweetsActions';

class App1 extends Component {

    componentWillMount() {
        this.props.dispatch(fetchUser());
    }

    handle_loadTweet() {
        this.props.dispatch(fetchTweets());
    }

    handle_addTweet(id) {
        this.props.dispatch(addTweet(id,"new title"));
    }

    handle_updateTweet(id) {
        this.props.dispatch(updateTweet(id, "updated title"));
    }

    handle_updateUserName(e) {
        if (e.keyCode === 13) {
            this.props.dispatch(setUserName(e.target.value));
        }
    }

    handle_setUserAge(e) {
        if (e.keyCode === 13) {
            this.props.dispatch(setUserAge(parseInt( e.target.value)));
        }
    }

    render() {

        console.log(this.props.user);
        console.log("user fetched", this.props.userFetched);
        console.log("tweet fetched", this.props.tweetFetched);
        console.log("tweets[]", this.props.tweets);

        const { user, tweets } = this.props;        

        const load_tweet_button = tweets.length ? <span /> :
            <button onClick={() => this.handle_loadTweet()}>load tweets</button>;

        const mappedTweets = tweets.map((tweet, index) =>
            <li key={index}>{tweet.title}</li>
        ).slice(tweets.length-10, tweets.length);

        return (
            <div>
                redux
                <p>{user.name} {this.props.user.age}</p>
                <input type="text" onKeyDown={(e) => this.handle_updateUserName(e)} defaultValue="update name press enter" />
                <input type="number" onKeyDown={(e) => this.handle_setUserAge(e)} defaultValue={0} />
                <br />
                {load_tweet_button}
                <button onClick={() => this.handle_addTweet(tweets.length + 1)}>add tweet</button>
                <button onClick={() => this.handle_updateTweet(tweets.length)}>update last tweet</button>
                <ul>{mappedTweets}</ul>
            </div>
        );
    }
}

export default connect(
    (store) => {
        return {
            user: store.user.user,
            userFetched: store.user.fetched,
            tweetFetched: store.tweets.fetched,
            tweets: store.tweets.tweets,
        };
    }
)(App1);