
import {IonHeader, IonContent, IonToolbar, IonTitle,IonPage,IonCard,IonCardContent,IonButton} from '@ionic/react';
import React,{useState}  from 'react';

const Login: React.FC = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const handleSubmit = async () => {
    const url = "https://afternoon-refuge-46845.herokuapp.com/api/getuser/"+email+"/"+password;
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    if(data.length > 0){
        window.location.href=("/Calendario");
    }else{
      console.log("no se ha podido iniciar");
    }

  };

      return (
          <IonPage >
              <IonHeader>
                  <IonToolbar>
                      <IonTitle class="tituloLogin">Schedule.Mo</IonTitle>
                  </IonToolbar>
              </IonHeader>
              <IonContent>

              <IonCard className="pagina">

                  <IonCardContent>
                      <form onSubmit={(e) => { e.preventDefault(); handleSubmit();}}>
                          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email..." className="email" name="email" required></input>
                          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password..." className="password" name="password" required></input>
                          <IonButton type="submit" expand="block" className="submit">iniciar sesion</IonButton>
                      </form>
                          
                  </IonCardContent>
              </IonCard>
              <IonButton expand="block" color="secondary" href="./Registrar">Crear Cuenta</IonButton>
          </IonContent>
        </IonPage>
      );
  
}

export default Login;