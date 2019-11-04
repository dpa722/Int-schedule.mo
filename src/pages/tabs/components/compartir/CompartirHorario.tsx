import React from 'react';
import { IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonBackButton } from '@ionic/react';


const CompartirHorario: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Compartir" />
          </IonButtons>
          <IonTitle>Compartir Tus Horarios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default CompartirHorario;