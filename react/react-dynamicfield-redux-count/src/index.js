import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Counter from './Counter';
import * as serviceWorker from './serviceWorker';
import countReducer from './reducer';
let store = createStore(countReducer);
ReactDOM.render(<App />, document.getElementById('root'));
const renderCount = () => {
    ReactDOM.render(
        <Counter value={store.getState()} onIncrement={() => {
            store.dispatch({
                type: 'INCREMENT'
            })
        }} 
        onDecrement={() => {
            store.dispatch({
                type: 'DECREMENT'
            })
        }}/>, 
        document.getElementById('redux')
    );
}

store.subscribe(() => {
    console.log(store.getState())
})
serviceWorker.unregister();
