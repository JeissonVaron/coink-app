import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformativeOinkComponent } from './informative-oink/informative-oink.component';
import { NumberPadComponent } from './number-pad/number-pad.component';
import { PersonalDataRegistrationFormComponent } from './personal-data-registration-form/personal-data-registration-form.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhoneNumberPipe } from '../pipes/phone-number.pipe';

@NgModule({
  declarations: [
    PersonalDataRegistrationFormComponent,
    InformativeOinkComponent,
    TermsConditionsComponent,
    WelcomeModalComponent,
    NumberPadComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    PhoneNumberPipe,
  ],
  exports: [
    PersonalDataRegistrationFormComponent,
    InformativeOinkComponent,
    TermsConditionsComponent,
    WelcomeModalComponent,
    NumberPadComponent,
    ToolbarComponent,
  ],
})
export class SharedComponentModuleModule {}
