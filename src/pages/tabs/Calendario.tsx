import {IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,
        IonContent,IonHeader,IonIcon,IonItem,IonLabel,IonList,
        IonListHeader,IonPage,IonTitle,IonToolbar } from '@ionic/react';

import {book} from 'ionicons/icons';
import React from 'react';

import './tabs.css';
import Footer from './components/Footer';

const Calendario: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <br/>
          <IonTitle>HORARIOS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardSubtitle>comienzo 1</IonCardSubtitle>
            <IonCardTitle>creacion de horario</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              colocacion de grilla para el creado de horarios
            </p>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Eventos</IonLabel>
          </IonListHeader>
          <IonItem href="#" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Lista de Eventos Pendientes</IonLabel>
          </IonItem>

        </IonList>
      </IonContent>
      <Footer>
      </Footer>
    </IonPage>
  );

}

export default Calendario;