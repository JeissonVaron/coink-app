import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformativeOinkComponent } from './informative-oink.component';

describe('InformativeOinkComponent', () => {
  let component: InformativeOinkComponent;
  let fixture: ComponentFixture<InformativeOinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InformativeOinkComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformativeOinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call showInformationByType when ngOnChanges is called', () => {
    spyOn(component, 'showInformationByType');
    component.ngOnChanges();
    expect(component.showInformationByType).toHaveBeenCalled();
  });

  it('should set the correct information based on the type', () => {
    component.type = 'Oink';
    component.showInformationByType();
    expect(component.image).toEqual('./../../../assets/icon/informative-coink-logo.png');
    expect(component.description).toEqual('Para comenzar, por favor ingresa <b style="color: #757575;">tu número celular.</b>');
  
    component.type = 'OinkM';
    component.showInformationByType();
    expect(component.image).toEqual('./../../../assets/icon/informative-coinkM-logo.png');
    expect(component.title).toEqual('<b>¿CUÁLES SON TUS DATOS?</b>');
    expect(component.description).toEqual('Ahora necesitamos saber algunos datos tuyos');
  
    component.type = 'OinkPolice';
    component.showInformationByType();
    expect(component.image).toEqual('./../../../assets/icon/informative-coinkPolice-logo.png');
    expect(component.title).toEqual('<b>ESTAS MUY CERCA DE SER PARTE DE COINK.</b>');
    expect(component.description).toEqual('Solo es necesario que leas detenidamente el contrato que se encuentra al final de esta pantalla y lo aceptes.');
  });
});
