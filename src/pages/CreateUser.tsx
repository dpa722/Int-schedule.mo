import {
    IonHeader, IonContent, IonToolbar, IonTitle,IonPage,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonButton
  } from '@ionic/react';
  
import React,{useState}  from 'react';
import './CreateUser.css';

  const CreateUser: React.FC = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName] = useState('');

    const handleSubmit = async () => {
      const url = 'https://afternoon-refuge-46845.herokuapp.com/api/users';
      const result = await fetch(url,{
          method : 'post',
          headers : {
              'Accept':'application/json',
              'Content-type':'application/json',
          },
          body : JSON.stringify({
                name : name,
                email : email,
                password : password
          })
      });
      const data = await result.json();
      if(data.email === email){
          window.location.href=("/tab1");
      }else{
        alert("El email ingresado ya pertenece a una cuenta");
        window.location.href = ("/createUser");
      }
    };
        return (
            <IonPage >
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Crear Usuario</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                <IonCard className="pagina">
                    <IonCardHeader>
                        <IonCardSubtitle>Página de creación de usuario</IonCardSubtitle>
                        <IonCardTitle>Crear Nuevo Usuario</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit();}}>
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="nombre..." className="inputForm" name="name" required></input>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email..." className="inputForm" name="email" required></input>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password..." className="inputForm" name="password" required></input>
                            <IonButton type="submit" expand="block" className="submit">Crear Cuenta</IonButton>
                        </form>
                        <div className="registro">
                            <IonButton expand="block" color="secondary" href = "/login">Cancelar</IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>
            </IonContent>
          </IonPage>
        );   
  }
  export default CreateUser;
  