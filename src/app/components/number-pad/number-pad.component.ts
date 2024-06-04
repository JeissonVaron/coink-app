import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { numberPadOptions } from './numberPadOptions';

@Component({
  selector: 'app-number-pad',
  templateUrl: './number-pad.component.html',
  styleUrls: ['./number-pad.component.scss'],
})
export class NumberPadComponent implements OnInit {
  @Output() fullPhoneNumber = new EventEmitter<number>();
  numberPadForm: FormGroup = new FormGroup({});

  pattern: string = '^3\\d*$';
  inputs: string[] = numberPadOptions;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.numberPadForm = this.fb.group({
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(this.pattern),
      ]),
    });
  }

  get phoneNumber() {
    return this.numberPadForm.controls['phoneNumber'];
  }

  setValueNumberPad(input: string) {
    const control = this.phoneNumber;
    let phoneNumberValue = control.value;

    switch (input) {
      case 'delete':
        control.setValue(phoneNumberValue.slice(0, -1));
        break;
      case 'check':
        this.phoneNumber.markAsDirty();
        this.phoneNumber.markAsTouched();
        if (this.numberPadForm.valid) {
          const phoneNumberString = this.phoneNumber.value;
          this.fullPhoneNumber.emit(parseInt(phoneNumberString));
        }
        break;
      default:
        if (phoneNumberValue.length < 10)
          control.setValue((phoneNumberValue += input));
        break;
    }
  }

  isIcon(input: string): boolean {
    return input == 'delete' || input == 'check' ? true : false;
  }
}