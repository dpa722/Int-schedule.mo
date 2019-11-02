import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/react';
import { expand, contract } from 'ionicons/icons';

import './tabs.css';
import Footer from './components/Footer';


const Compartir: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <br/>
          <IonTitle>compartir horario</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <br/>
        <IonButton color="dark" expand="block" shape="round" href="./CompartirHorario">
          <IonIcon icon={contract}> </IonIcon>
          Compartir Horario
        </IonButton>
        <br/>

        <IonButton color="secondary" expand="block" shape="round" href="./CopiarHorario">
          <IonIcon icon={expand}> </IonIcon>
          Copiar Horario
        </IonButton>

      </IonContent>
      <Footer></Footer>
    </IonPage>
  );
};

export default Compartir;