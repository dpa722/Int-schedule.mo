import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel
} from "@ionic/react";
import Footer from "./components/Footer";

const Tab3Page: React.FC = (props: any) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
      <Footer user={props.match.params.iduser} calendar="0" />
    </IonPage>
  );
};

export default Tab3Page;
