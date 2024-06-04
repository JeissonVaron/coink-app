import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {

  constructor(private alertController: AlertController) { }

  async openAlert() {
    const alert = await this.alertController.create({
      header: '¡Oops!',
      message: 'Estamos trabajando para mejorar tu experiencia. Pronto tendrás acceso a esta funcionalidad. Gracias por tu paciencia.',
      buttons: ['Ok'],
    });

    await alert.present();
  }

}
