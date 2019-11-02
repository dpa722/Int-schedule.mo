import React from 'react';
import {
  IonToolbar,
  IonButton,
  IonIcon,
  IonFooter
} from '@ionic/react';
import '../tabs.css';

import { home, calendar, share, clipboard } from 'ionicons/icons';

const Footer: React.FC = () => {
    return(
      <IonFooter class="footer">
      <IonToolbar>
            <IonButton size="large" color="tertiary" href="./Calendario">
              <IonIcon icon={home}/>
            </IonButton>
            <IonButton size="large" href="./Horarios">
              <IonIcon icon={calendar}/>
            </IonButton>
            <IonButton size="large" href="./Actividades">
              <IonIcon icon={clipboard}/>
            </IonButton>
            <IonButton size="large" href="./Compartir">
              <IonIcon icon={share}/>
            </IonButton>
      </IonToolbar>
    </IonFooter>
    );
}
export default Footer;

