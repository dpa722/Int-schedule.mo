import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab2: React.FC = () => {
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
    </IonPage>
  );
};

export default Tab2;