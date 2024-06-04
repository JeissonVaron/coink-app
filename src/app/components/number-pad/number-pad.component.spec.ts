import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NumberPadComponent } from './number-pad.component';
import { PhoneNumberPipe } from 'src/app/pipes/phone-number.pipe';

describe('NumberPadComponent', () => {
  let component: NumberPadComponent;
  let fixture: ComponentFixture<NumberPadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberPadComponent ],
      imports: [IonicModule.forRoot(), PhoneNumberPipe]
    }).compileComponents();

    fixture = TestBed.createComponent(NumberPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the phone number control value correctly', () => {
    const input = '1';
    const expectedValue = '1';
    component.phoneNumber.setValue('');
  
    component.setValueNumberPad(input);
  
    expect(component.phoneNumber.value).toEqual(expectedValue);
  });

  it('should update the phone number control value correctly (delete the last number)', () => {
    const input = 'delete';
    const expectedValue = '3';
    component.phoneNumber.setValue('30');
  
    component.setValueNumberPad(input);
  
    expect(component.phoneNumber.value).toEqual(expectedValue);
  });

  it('should validate if the number is correct', () => {
    const input = 'check';
    const expectedValue = '3000000000';
    component.phoneNumber.setValue('3000000000');
    spyOn(component.fullPhoneNumber, 'emit');
  
    component.setValueNumberPad(input);
  
    expect(component.fullPhoneNumber.emit).toHaveBeenCalledWith(parseInt(expectedValue));
  });
});
