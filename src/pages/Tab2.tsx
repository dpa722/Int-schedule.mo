import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonIcon, IonTitle } from '@ionic/react';
import { add } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Horarios</IonTitle>
          <IonButton color="light" slot="end" href="/createSchedule/1">
            <IonIcon icon={add}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>





        <IonContent
          scrollEvents={true}
          onIonScrollStart={() => { }}
          onIonScroll={() => { }}
          onIonScrollEnd={() => { }}>
        </IonContent>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;