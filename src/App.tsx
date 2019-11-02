import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import login from './pages/Login';
import registrar from './pages/Registrar';

import calendario from './pages/tabs/Calendario';
import horarios from './pages/tabs/Horarios';
import actividades from './pages/tabs/Actividades';
//send
import compartir from './pages/tabs/Compartir';
import compartirHorario from './pages/tabs/components/compartir/CompartirHorario';
import copiarHorario from './pages/tabs/components/compartir/CopiarHorario';




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
import './theme/pages.css';


/* no estoy ceguro de como harreglas la ruta <Route path="/Calendario" render={() => <Redirect to="/details" />} />*/

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/Login" component={login}  />
        <Route exact path="/" render={() => <Redirect to="/Login" />} />
        <Route path="/Registrar" component={registrar}  />


        <Route path="/Calendario" component={calendario} />
        
        <Route path="/Horarios" component={horarios} />
        <Route path="/Actividades" component={actividades} />


        <Route path="/Compartir" component={compartir} />
        <Route path="/CopiarHorario" component={copiarHorario} />
        <Route path="/CompartirHorario" component={compartirHorario} />



      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
