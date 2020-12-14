import { Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";
import PageSucess from "./pages/pagesuccess";
import Login from "./pages/login";
import Members from "./pages/members";
import RegisterEssentials from "./pages/registerEssentials";
import RegisterSecondary from "./pages/registerSecondary";
import VisitingProfile from "./pages/visitingprofile";
import Works from "./pages/pageWorks";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/members">
        <Members />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register/1">
        <RegisterEssentials />
      </Route>
      <Route exact path="/register/2">
        <RegisterSecondary />
      </Route>
      <Route exact path="/profile/:id">
        <VisitingProfile />
      </Route>
      <Route exact path="/page-success">
        <PageSucess />
      </Route>
      <Route exact path="/my-profile/edit"></Route>
      <Route exact path="/my-profile"></Route>
      <Route exact path="/works">
        <Works/>
      </Route>
      <Route exact path="/works/edit"></Route>
    </Switch>
  );
};

export default Routes;
