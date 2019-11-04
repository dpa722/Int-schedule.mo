import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import React, { Component } from 'react';

import { Plugins, CameraResultType } from '@capacitor/core';


const { Camera } = Plugins;
const INITIAL_STATE = {photo: '',};


export class CopiaHorario extends Component {

  state: any = {};
 
  constructor(props: any, state: any) {
    super(props);
    state = {INITIAL_STATE }; //falta colocar lo del lector pero no agarra el constroctor, en el gnx 
  }

  async takePicture() {
    const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri
    });
    var imageUrl = image.webPath;
    this.setState({photo: imageUrl})
  }


  render() {
    const { photo } = this.state;
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <IonImg style={{ 'border': '1px solid black', 'minHeight': '100px' }} src={photo} ></IonImg>
          <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
              <IonFabButton color="primary" onClick={() => this.takePicture()}>
              <IonIcon name="add" />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage >
    );
  };
}
export default CopiaHorario;