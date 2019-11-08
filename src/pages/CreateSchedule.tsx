import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonTitle, IonBackButton, IonButtons, IonLabel, IonButton } from '@ionic/react';
import './CreateSchedule.css';
const CreateSchedule: React.FC = (props: any) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        const url = 'https://afternoon-refuge-46845.herokuapp.com/api/schedules';
        const result = await fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                description: description,
                user_id: props.match.params.iduser
            })
        });
        const data = await result.json();
        if (data.user_id === props.match.params.iduser) {
            window.location.href = (`/tab2/${props.match.params.iduser}`);
        } else {
            alert("no se pudo crear el calendario");
            window.location.href = (`/createSchedule/${props.match.params.iduser}`);

        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tab2" />
                    </IonButtons>
                    <IonTitle>Creación de Horario</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="contenido">
                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                        <IonLabel>Inserte Nombre del nuevo Calendario:</IonLabel>
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre Calendario..." className="inputName" name="name" required />
                        <IonLabel>Descripcion (Opcional):</IonLabel>
                        <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Descripción..." className="inputDescription" name="description" />
                        <IonButton type="submit" expand="block" className="submit">Aceptar</IonButton>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CreateSchedule;