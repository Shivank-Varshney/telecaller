import React, {useState} from "react";
import { Route, Switch } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import Register from "./pages/Register/Register";
import Login from './pages/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from "./pages/Home/Home";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => (
  // const [isAuth, setIsAuth] = React.useState(false);
  <IonApp>
    <Switch> 
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/home' component={Home} />
      {/* <ProtectedRoute path="/home" component={Home} isAuth={isAuth} /> */}
    </Switch>
  </IonApp>
);

export default App;
