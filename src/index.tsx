import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import * as serviceWorker from "./serviceWorker";
import "normalize.css";
import store from "./stores/CounterStore";
import { Provider } from "react-redux";


const render = () => ReactDOM.render(
  <Provider store={store}>
    <TodoList/>
  </Provider>
  , document.getElementById("root"));

render();

//store.subscribe(render);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
