import { Switch, Route } from "react-router-dom";

const Routes = () => {
  <Switch>
    <Route exact path="/"></Route>
    <Route path="/members"></Route>
    <Route path="/login"></Route>
    <Route exact path="/register/1"></Route>
    <Route exact path="/register/2"></Route>
    <Route path="/profile/:id"></Route>
  </Switch>;
};

export default Routes;
