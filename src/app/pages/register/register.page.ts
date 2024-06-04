import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { WelcomeModalComponent } from 'src/app/components/welcome-modal/welcome-modal.component';
import { IPersonalInformationForm } from 'src/app/interfaces/personal-information.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerFormSwitch: string = '';
  personalInformation: IPersonalInformationForm =
    {} as IPersonalInformationForm;
  toolbarTitle: string = '';
  informativeOinkType: string = '';
  returnRoute: string = '/auth';
  cellPhoneNumber: number = 0;
  steps = [
    { id: 1, value: 'cellPhoneNumber' },
    { id: 2, value: 'personalAccountData' },
    { id: 3, value: 'termsAndConditions' },
  ];

  constructor(
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.activateStepOne();
  }

  activateStepOne() {
    this.registerFormSwitch = 'cellPhoneNumber';
    this.toolbarTitle = 'NÚMERO CELULAR';
    this.informativeOinkType = 'Oink';
  }

  activateStepTwo(fullPhoneNumber: number) {
    this.cellPhoneNumber = fullPhoneNumber;
    this.informativeOinkType = 'OinkM';
    this.registerFormSwitch = 'personalAccountData';
    this.toolbarTitle = 'DATOS DE CUENTA';
  }

  activateStepThree(personalInformation: IPersonalInformationForm) {
    this.personalInformation = personalInformation;
    this.informativeOinkType = 'OinkPolice';
    this.registerFormSwitch = 'termsAndConditions';
    this.toolbarTitle = 'FINALIZAR';
  }

  async save() {
    const data = {
      ...this.personalInformation,
      cellPhoneNumber: this.cellPhoneNumber,
    };
    const modal = await this.modalController.create({
      component: WelcomeModalComponent,
      cssClass: 'welcome-modal',
    });
    await modal.present();
    this.router.navigate(['/home'], { state: { storedData: data } });
  }

  goToAuth() {
    this.router.navigate(['/']);
  }

  onChangeStep(step: string) {
    switch (step) {
      case 'cellPhoneNumber':
        this.activateStepOne();
        break;
      case 'personalAccountData':
        this.activateStepTwo(this.cellPhoneNumber);
        break;
    }
  }
}
