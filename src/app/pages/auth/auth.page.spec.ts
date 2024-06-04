import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthPage } from './auth.page';
import { AlertController } from '@ionic/angular';

describe('AuthPage', () => {
  let component: AuthPage;
  let fixture: ComponentFixture<AuthPage>;
  let alertController: AlertController;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPage);
    alertController = TestBed.inject(AlertController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open an alert', async () => {
    const alertControllerSpy = spyOn(alertController, 'create').and.callThrough();
  
    await component.openAlert();
  
    expect(alertControllerSpy).toHaveBeenCalled();
    alertController.dismiss();
  });
});
