import { Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";
import MemberCard from "./components/members/memberCard";
import Login from "./pages/login";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/members">
          <MemberCard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/register/1"></Route>
        <Route exact path="/register/2"></Route>
        <Route path="/profile/:id"></Route>
      </Switch>
      ;
    </>
  );
};

export default Routes;
