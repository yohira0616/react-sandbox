import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoList from "./TodoList/TodoList";
import Enquete from "./Enquete";
import HookCounter from "./HookCounter";
import TimerCountUp from "./TimerCountUp";
import {DatePicker} from "antd"
import "antd/dist/antd.css"

// sample
function Users() {
  return <h2>Users</h2>;
}

function antd(){
  return (<div>
    <p>antd</p>
  </div>)
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hookcounter">ReactHooksSample</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/antd/">Antd</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={TodoList}/>
        <Route path="/users/" component={Users}/>
        <Route path="/enquete/" component={Enquete}/>
        <Route path="/hookcounter" component={HookCounter} />
        <Route path="/antd" component={antd} />
      </div>
      <TimerCountUp />
    </Router>
  );
}

export default AppRouter;