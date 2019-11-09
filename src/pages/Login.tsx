import {
    IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonLabel
} from '@ionic/react';

import React, { useState } from 'react';

import './Login.css';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const url = "https://afternoon-refuge-46845.herokuapp.com/api/getuser/" + email + "/" + password;
        const result = await fetch(url);
        const data = await result.json();
        if (data.length > 0) {
            window.location.href = (`/tab1/${data[0].id}/0`);
        } else {
            console.log("no se ha podido iniciar");
        }

    };

    return (
        <IonPage >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonCard className="pagina">
                    <IonCardHeader>
                        <IonCardSubtitle>Bienvenido a Schedule.mo</IonCardSubtitle>
                        <IonCardTitle>Iniciar Sesion</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email..." className="email" name="email" required></input>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password..." className="password" name="password" required></input>
                            <IonButton type="submit" expand="block" className="submit">iniciar sesion</IonButton>
                        </form>
                        <div className="registro">
                            <IonLabel className="labelCuenta">Usted ya tiene una cuenta en Schedule?</IonLabel>
                            <IonButton expand="block" color="secondary" href = "/createUser">Crear Cuenta</IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );

}

export default Login;
