import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberFormat',
  standalone: true,
  pure: false,
})
export class PhoneNumberPipe implements PipeTransform {
  transform(numbers: string): string {
    if (numbers) {
      let fullNumber: string = '';
      numbers.split('').forEach((number, index) => {
        fullNumber += index === 3 ? ` ${number}` : `${number}`;
      });
      return fullNumber;
    } else {
      return '( X X X - X X X X X X )';
    }
  }
}
