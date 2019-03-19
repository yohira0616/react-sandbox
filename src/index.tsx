import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import * as serviceWorker from './serviceWorker';
import 'normalize.css'
import {createStore} from "redux";
import CounterAction from "./actions/CounterAction"

function counter(state = 0, action:CounterAction) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)

store.subscribe(()=> console.log(store.getState()))

store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TodoList/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
