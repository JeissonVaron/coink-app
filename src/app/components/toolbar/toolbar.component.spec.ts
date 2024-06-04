import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if step id is less than or equal to current step id', () => {
    component.currentStep = 'step2';
    component.steps = [
      { id: 1, value: 'step1' },
      { id: 2, value: 'step2' },
      { id: 3, value: 'step3' },
    ];

    expect(component.getCheck({ id: 1 })).toBe(true);
    expect(component.getCheck({ id: 2 })).toBe(true);
    expect(component.getCheck({ id: 3 })).toBe(false);
  });

  it('should return false if current step is not found in steps array', () => {
    component.currentStep = 'step4';
    component.steps = [
      { id: 1, value: 'step1' },
      { id: 2, value: 'step2' },
      { id: 3, value: 'step3' },
    ];

    expect(component.getCheck({ id: 1 })).toBe(false);
    expect(component.getCheck({ id: 2 })).toBe(false);
    expect(component.getCheck({ id: 3 })).toBe(false);
  });

  it('should emit changeStep event if step is valid', () => {
    spyOn(component.changeStep, 'emit');
    component.currentStep = 'step2';
    component.steps = [
      { id: 1, value: 'step1' },
      { id: 2, value: 'step2' },
      { id: 3, value: 'step3' },
    ];
  
    component.onChange({ id: 1, value: 'step1'});
    expect(component.changeStep.emit).toHaveBeenCalledWith('step1');
  });
});
