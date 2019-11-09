import React from "react";

import {
  IonButton,
  IonIcon,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import "./Footer.css";
import { home, calendar, share, clipboard } from "ionicons/icons";
import { useHistory } from "react-router-dom";
type Props = {
  user: string;
  calendar: string;
};
const Footer: React.FC<Props> = (props: any) => {
  let history = useHistory();
  return (
    <IonFooter className="footer">
      <IonGrid>
        <IonRow className="fila">
          <IonCol className="columna">
            <IonButton
              expand="block"
              color="primary"
              className="icono"
              onClick={() => {
                history.push(`/tab1/${props.user}/${props.calendar}`);
              }}
            >
              <IonIcon icon={home} />
            </IonButton>
          </IonCol>
          <IonCol className="columna">
            <IonButton
              expand="block"
              color="success"
              className="icono"
              onClick={() => {
                history.push(`/tab2/${props.user}`);
              }}
            >
              <IonIcon icon={calendar} />
            </IonButton>
          </IonCol>
          <IonCol className="columna">
            <IonButton
              expand="block"
              color="tertiary"
              className="icono"
              onClick={() => {
                history.push(`/tab3/${props.user}`);
              }}
            >
              <IonIcon icon={clipboard} />
            </IonButton>
          </IonCol>
          <IonCol className="columna">
            <IonButton
              expand="block"
              color="danger"
              className="icono"
              onClick={() => {
                history.push(`/tab4/${props.user}`);
              }}
            >
              <IonIcon icon={share} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  );
};
export default Footer;
