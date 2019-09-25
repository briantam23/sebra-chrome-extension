import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <h1>Sebra</h1>, 
    document.getElementById('root')
)


serviceWorker.unregister();
