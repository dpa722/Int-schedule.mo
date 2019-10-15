import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

const Tab3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <br/>
          <IonTitle>lista de actividades</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      <IonList>
          <IonItem routerLink="/components/eventos">
            <IonLabel>
              <h2>detalles</h2>
            </IonLabel>
          </IonItem>
        </IonList>


      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
