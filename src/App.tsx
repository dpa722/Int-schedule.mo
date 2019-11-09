import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import Eventos from './pages/components/eventos';
import CreateSchedule from './pages/CreateSchedule';

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

const App: React.FC = () => {

  return (

    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/tab1/:iduser?/:idcalendar?" component={Tab1} exact={true} />
          <Route path="/tab2/:iduser?" component={Tab2} exact={true} />
          <Route path="/components/eventos" component={Eventos} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/tab4" component={Tab4} />
          <Route path="/login" component={Login} />
          <Route path="/createSchedule/:iduser" component={CreateSchedule} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );

}

export default App;
