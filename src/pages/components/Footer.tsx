import React from 'react';

import {
  IonButton,
  IonIcon,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import './Footer.css';
import { home, calendar, share, clipboard } from 'ionicons/icons';
import { Link } from 'react-router-dom';

type Props = {
  user: string,
  calendar: string,
}
const Footer: React.FC<Props> = (props: any) => {

  return (
    <IonFooter>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonButton href={"/tab1/" + props.user + "/" + props.calendar} expand="block" color="primary">
              <IonIcon icon={home} />
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton href={"/tab2/" + props.user} expand="block" color="success">
              <IonIcon icon={calendar} />
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton href="/tab3" expand="block" color="tertiary">
              <IonIcon icon={clipboard} />
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton href="/tab4" expand="block" color="danger">
              <IonIcon icon={share} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  );
}
export default Footer;

