import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App1 from "./appStart";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <App1 />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
