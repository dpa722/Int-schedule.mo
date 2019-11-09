import {
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList,
  IonListHeader, IonPage, IonTitle, IonToolbar, IonButton
} from '@ionic/react';

import { book, add } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';
import Footer from './components/Footer';

const Tab1: React.FC = (props: any) => {

  const { history } = props;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <br />
          <IonTitle>calendario {props.match.params.idcalendar}</IonTitle>
          <IonButton color="light" slot="end" onClick={() => history.push(`/createSchedule/${props.match.params.iduser}`)}>
            <IonIcon icon={add}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardSubtitle>usuario: {props.match.params.iduser}</IonCardSubtitle>
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
      <Footer user={props.match.params.iduser} calendar={props.match.params.idcalendar} />
    </IonPage>
  );

}

export default Tab1;
