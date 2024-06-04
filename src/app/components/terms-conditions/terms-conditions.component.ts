import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TERMS_CONDITIONS } from 'src/app/shared/constants/terms-conditions';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss'],
})
export class TermsConditionsComponent implements OnInit {
  @Output() termsAndConditions = new EventEmitter<boolean>();
  termsConditionsForm: FormGroup = new FormGroup({});
  TERMS_CONDITIONS = TERMS_CONDITIONS;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.termsConditionsForm = this.fb.group({
      termsAndConditionsAccepted: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  openTermsConditions() {
    const url = 'https://coink.com/terminos-y-condiciones/';
    window.open(url, '_blank');
  }

  onSubmit() {
    if (this.termsConditionsForm.valid) {
      this.termsAndConditions.emit(true);
    }
  }
}
