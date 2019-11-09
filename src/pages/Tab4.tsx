import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon
} from "@ionic/react";
import { expand, contract } from "ionicons/icons";
import Footer from "./components/Footer";

const Tab4Page: React.FC = (props: any) => {
  const { history } = props;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>compartir horario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton
          color="primary"
          expand="block"
          onClick={() => history.push(`/tab4/${props.match.params.iduser}`)}
        >
          <IonIcon icon={contract}> </IonIcon>
          Compartir Horario
        </IonButton>
        <IonButton
          color="secondary"
          expand="block"
          onClick={() => history.push(`/tab4/${props.match.params.iduser}`)}
        >
          <IonIcon icon={expand}> </IonIcon>
          Copiar Horario
        </IonButton>
      </IonContent>
      <Footer user={props.match.params.iduser} calendar="0" />
    </IonPage>
  );
};

export default Tab4Page;
