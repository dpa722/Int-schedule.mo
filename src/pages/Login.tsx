import {
    IonHeader, IonContent, IonToolbar, IonTitle,IonPage,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonInput,IonButton,IonLabel
  } from '@ionic/react';
  
  import React from 'react';

  import './Login.css';
  
  const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                 </IonToolbar>
             </IonHeader>
            <IonContent>

            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Bienvenido a Schedule.mo</IonCardSubtitle>
                    <IonCardTitle>Iniciar Sesion</IonCardTitle>
                </IonCardHeader>
                 <IonCardContent>
                     <form action="">
                        <IonInput type="text" placeholder="email..." className="email" name="email"></IonInput>
                        <IonInput type="password" placeholder="password..." className="password" name="password"></IonInput>
                        <IonButton type="submit" expand="block" className="submit">iniciar sesion</IonButton>
                     </form>
                     <div className="registro">
                        <IonLabel className="labelCuenta">Tiene ya una cuenta</IonLabel>
                        <IonButton expand="block" color="secondary">Crear Cuenta</IonButton>
                     </div>
                </IonCardContent>
             </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;
  