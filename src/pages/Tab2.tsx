import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonIcon, IonTitle, IonList, IonItem, IonLabel } from '@ionic/react';
import { add } from 'ionicons/icons';
import './Tab2.css';
import Footer from './components/Footer';

const Tab2: React.FC = (props: any) => {

  const [calendarios, setCalendarios] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function loadData() {
      const url = "https://afternoon-refuge-46845.herokuapp.com/api/auxiliar/userSchedules/" + props.match.params.iduser;
      const result = await fetch(url);
      const data = await result.json();
      setCalendarios(data);
    }
    loadData();
  });

  const calendarList = calendarios.map((calendar: any, index: number) =>
    <button className="btn" onClick={() => history.push(`/tab1/${calendar.user_id}/${calendar.id}`)}>
      <IonItem key={index}>
        <IonLabel>
          <h2>{calendar.name}</h2>
          <p>{calendar.description}</p>
        </IonLabel>
      </IonItem>
    </button>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Horarios</IonTitle>
          <IonButton color="light" slot="end" onClick={() => history.push(`/createSchedule/${props.match.params.iduser}`)}>
            <IonIcon icon={add}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent
        scrollEvents={true}
        onIonScrollStart={() => { }}
        onIonScroll={() => { }}
        onIonScrollEnd={() => { }}>
        <IonList>
          {calendarList}
        </IonList>
      </IonContent>
      <Footer user={props.match.params.iduser} calendar="0" />
    </IonPage>
  );
};

export default Tab2;