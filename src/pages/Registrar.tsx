import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCardContent, IonCard } from '@ionic/react';
import React from 'react';

const Registrar: React.FC = () => {
  return (
    <IonPage >
              <IonHeader>
                  <IonToolbar>
                      <IonTitle class="tituloLogin">Schedule.Mo</IonTitle>
                  </IonToolbar>
              </IonHeader>
              <IonContent>

              <IonCard className="paginaCrear">

                  <IonCardContent>
                      <form >
                          <input type="name" placeholder="usuario..." className="name" name="name" required></input>
                          <input type="email" placeholder="email..." className="email" name="email" required></input>
                          <input  type="password" placeholder="password..." className="password" name="password" required></input>
                          <IonButton type="submit" expand="block" shape="round" fill="outline" class="crear" >iniciar sesion</IonButton>
                      </form>
                          
                  </IonCardContent>
              </IonCard>
          </IonContent>
        </IonPage>
  );
};

export default Registrar;