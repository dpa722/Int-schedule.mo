import React from 'react';
import {
  IonToolbar,
  IonButton,
  IonIcon,
  IonFooter
} from '@ionic/react';
import './Footer.css';
import { home, calendar, share, clipboard } from 'ionicons/icons';

const Footer: React.FC = () => {
    return(
      <IonFooter>
      <IonToolbar>
            <IonButton size="large" color="tertiary">
              <IonIcon icon={home}/>
            </IonButton>
            <IonButton size="large">
              <IonIcon icon={calendar}/>
            </IonButton>
            <IonButton size="large">
              <IonIcon icon={clipboard}/>
            </IonButton>
            <IonButton size="large">
              <IonIcon icon={share}/>
            </IonButton>
      </IonToolbar>
    </IonFooter>
    );
}
export default Footer;
  
