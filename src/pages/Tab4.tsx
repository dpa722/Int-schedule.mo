import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/react';
import { share, expand, contract } from 'ionicons/icons';


const Tab4Page: React.FC = () => {
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
        <IonButton color="dark" expand="block" shape="round" href="#">
          <IonIcon icon={contract}> </IonIcon>
          Compartir Horario
        </IonButton>
        <br/>

        <IonButton color="secondary" expand="block" shape="round" href="#">
          <IonIcon icon={expand}> </IonIcon>
          Copiar Horario
        </IonButton>

      </IonContent>

    </IonPage>
  );
};

export default Tab4Page;
