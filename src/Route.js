import Login from "/Login/login";
import DashboardUser from "./Dashboard/DashboardUser";
import DashboardManager from "./Dashboard/DashboardManager"
import { Route } from 'react-router';
<Route exact path="/login">

  <Login />
  <DashboardUser/>
  <DashboardManager/>

</Route>