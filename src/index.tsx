import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import * as serviceWorker from './serviceWorker';
import 'normalize.css'
// import {createStore} from "redux";
// import CounterReducer from "./reducers/CounterReducer"
//
// let store = createStore(CounterReducer)
//
// //store.subscribe(()=> console.log(store.getState()))
//
// store.dispatch({type:'INCREMENT'})
// store.dispatch({type:'INCREMENT'})
// store.dispatch({type:'DECREMENT'})
import store from './stores/CounterStore'


//ReactDOM.render(<App />, document.getElementById('root'));
const render = () => ReactDOM.render(<TodoList/>, document.getElementById('root'));

render()

store.subscribe(render)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
