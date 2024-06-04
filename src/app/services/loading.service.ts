import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading: any;
  isLoading = false;

  constructor(private loadingCtrl: LoadingController) {}

  async presentLoading() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.loading = await this.loadingCtrl.create({
        message: 'Cargando...'
      });
      await this.loading.present();
    }
  }

  async dismissLoading() {
    if (this.isLoading && this.loading) {
      await this.loading.dismiss();
      this.isLoading = false;
      this.loading = null;
    }
  }
}