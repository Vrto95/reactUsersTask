import "./App.scss";

import Users from "./components/users/Users";

import { Switch, Route } from "react-router-dom";

import UserInfo from "./components/users/UserInfo";
import { Login } from "./components/login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/user/:id">
          <UserInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
