import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoList from "./TodoList/TodoList";
import { UserStateSample } from "./UseStateSample";
import Enquete from "./Enquete";
import HookCounter from "./HookCounter";

// sample
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
              <Link to="/hookcounter">ReactHooksSample</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={TodoList}/>
        <Route path="/about/" component={UserStateSample}/>
        <Route path="/users/" component={Users}/>
        <Route path="/enquete/" component={Enquete}/>
        <Route path="/hookcounter" component={HookCounter} />
      </div>
    </Router>
  );
}

export default AppRouter;