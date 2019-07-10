import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoList from "./TodoList";
import { UserStateSample } from "./UseStateSample";

function Users() {
  return <h2>Users</h2>;
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
              <Link to="/about/">hooks</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={TodoList}/>
        <Route path="/about/" component={UserStateSample}/>
        <Route path="/users/" component={Users}/>
      </div>
    </Router>
  );
}

export default AppRouter;