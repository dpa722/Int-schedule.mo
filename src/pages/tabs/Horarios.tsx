import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './tabs.css';
import Footer from './components/Footer';

const horarios: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <br/>
          <IonTitle>lista de horarios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        
        


        <IonContent color="dark"
          scrollEvents={true}
          onIonScrollStart={() => {}}
          onIonScroll={() => {}}
          onIonScrollEnd={() => {}}>
        </IonContent>


        
      </IonContent>
      <Footer></Footer>
    </IonPage>
  );
};

export default horarios;