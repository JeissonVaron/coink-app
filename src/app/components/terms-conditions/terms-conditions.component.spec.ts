import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermsConditionsComponent } from './terms-conditions.component';

describe('TermsConditionsComponent', () => {
  let component: TermsConditionsComponent;
  let fixture: ComponentFixture<TermsConditionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsConditionsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open terms and conditions in a new tab', () => {
    spyOn(window, 'open');
    component.openTermsConditions();
    expect(window.open).toHaveBeenCalledWith('https://coink.com/terminos-y-condiciones/', '_blank');
  });

  it('should emit true when form is valid', () => {
    spyOn(component.termsAndConditions, 'emit');
    component.termsConditionsForm.controls['termsAndConditionsAccepted'].setValue(true);
    component.onSubmit();
    expect(component.termsAndConditions.emit).toHaveBeenCalledWith(true);
  });
});
