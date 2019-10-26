import {
    IonHeader, IonContent, IonToolbar, IonTitle,IonPage,IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonInput,IonButton,IonLabel
  } from '@ionic/react';
  
  import React,{Component} from 'react';
  //import axios from 'axios';
  import './Login.css';

  class FormUser extends Component{

        state= {
            email: '',
            password: '',
            estado:false
        }


    handleChange = (event: { target: { name: any; value: any; }; }) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = (event: { target: { name: any; value: any; }; }) => {
      
        const email = this.state.email;
        const pass = this.state.password;
        const url = `https://localhost:8000/api/getuser/${email}/${pass}`;
        fetch(url)
        .then(respuesta =>respuesta.json())
        .then(json => {
            this.setState({estado:true});
        })
        window.location.href = "https://localhost:8000/tab1";

    }


    render(){

        return(
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
                   <form action="handleSubmit">
                      <input onChange={this.handleChange} type="text" placeholder="email..." className="email" name="email"></input>
                      <input onChange={this.handleChange} type="password" placeholder="password..." className="password" name="password"></input>
                      <IonButton expand="block" type="submit"className="submit">iniciar sesion</IonButton>
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
    }

}

export default FormUser;