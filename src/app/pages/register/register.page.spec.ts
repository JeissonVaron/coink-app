import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IPersonalInformationForm } from 'src/app/interfaces/personal-information.interface';
import { Router } from '@angular/router';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let modalController: ModalController;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [ModalController],
    }).compileComponents();
    
    fixture = TestBed.createComponent(RegisterPage);
    modalController = TestBed.inject(ModalController);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should activate step three', () => {
    const personalInformation: IPersonalInformationForm = { } as IPersonalInformationForm;
    component.activateStepThree(personalInformation);
    expect(component.registerFormSwitch).toBe('termsAndConditions');
    expect(component.toolbarTitle).toBe('FINALIZAR');
    expect(component.informativeOinkType).toBe('OinkPolice');
    expect(component.personalInformation).toBe(personalInformation);
  });

  it('should activate step one', () => {
    component.onChangeStep('cellPhoneNumber');
    expect(component.registerFormSwitch).toBe('cellPhoneNumber');
    expect(component.toolbarTitle).toBe('NÚMERO CELULAR');
    expect(component.informativeOinkType).toBe('Oink');
  });
  
  it('should activate step two', () => {
    component.onChangeStep('personalAccountData');
    expect(component.registerFormSwitch).toBe('personalAccountData');
    expect(component.toolbarTitle).toBe('DATOS DE CUENTA');
    expect(component.informativeOinkType).toBe('OinkM');
  });

  it('should navigate to auth page', () => {
    spyOn(router, 'navigate');
    component.goToAuth();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should save the data recorded in the app', async () => {
    component.personalInformation = {} as IPersonalInformationForm;
    component.cellPhoneNumber = 3000000000;
    spyOn(router, 'navigate');
    await component.save();
    expect(router.navigate).toHaveBeenCalled();
    modalController.dismiss();
  })
});
