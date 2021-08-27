import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Dashboard from './Pages/Authentication/Dashboard';
import ForgotPassword from './Pages/Authentication/ForgotPassword';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/Blog/Details';
import Earnings from './Pages/Earnings';
import Error404 from './Pages/Error404';
import Home from './Pages/Home';
import Config from './Utils/Config';
import { AdminRoute, AuthRoute, ErrorRoute, HomeRoute } from './Utils/Routes';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <HomeRoute exact path={Config.homePageUrl} component={Home} />
          <AuthRoute exact path={Config.loginPageUrl} component={Login} />
          <AuthRoute exact path={Config.registerPageUrl} component={Register} />
          <AuthRoute exact path={Config.forgetPageUrl} component={ForgotPassword} />
          <AdminRoute exact path={Config.dashboardPageUrl} component={Dashboard} />
          <AdminRoute exact path={Config.earningsPageUrl} component={Earnings} />
          <HomeRoute exact path={Config.blogPageUrl} component={Blog} />
          <HomeRoute exact path={Config.blogSinglePageUrl} component={BlogDetails} />
          <ErrorRoute component={Error404} />
        </Switch>      
      </Router>
    </React.Fragment>
  )
}

export default App
