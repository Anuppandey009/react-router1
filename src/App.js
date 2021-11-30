import "./styles.css";
import { Route, Switch } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { UserList } from "./components/UserList";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <h1>Contact us</h1>
        </Route>

        <Route path="/users">
          <UserList />
        </Route>

        <Route path="/user/:id">
          <UserList />
        </Route>

        <Route>404 Page not happened</Route>
      </Switch>
    </div>
  );
}
