import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { InformativeOinkComponent } from 'src/app/components/informative-oink/informative-oink.component';
import { NumberPadComponent } from 'src/app/components/number-pad/number-pad.component';
import { PhoneNumberPipe } from 'src/app/pipes/phone-number.pipe';
import { PersonalDataRegistrationFormComponent } from 'src/app/components/personal-data-registration-form/personal-data-registration-form.component';
import { TermsConditionsComponent } from 'src/app/components/terms-conditions/terms-conditions.component';
import { WelcomeModalComponent } from 'src/app/components/welcome-modal/welcome-modal.component';
import { SharedComponentModuleModule } from 'src/app/components/shared-component-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    PhoneNumberPipe,
    ReactiveFormsModule,
    SharedComponentModuleModule,
  ],
  declarations: [RegisterPage],
})
export class RegisterPageModule {}
