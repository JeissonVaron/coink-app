import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchFieldsValidator(field1: string, field2: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const field1Value = control.get(field1)?.value;
    const field2Value = control.get(field2)?.value;

    if (field1Value !== field2Value) {
      const errors = { 'fieldsMismatch': true };
      control.get(field2)?.setErrors(errors);
      return errors;
    } else {
      control.get(field2)?.setErrors(null);
      return null;
    }
  };
}