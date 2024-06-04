import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() changeStep = new EventEmitter<any>();
  @Input() title: string = '';
  @Input() returnRoute: string = '';
  @Input() informativeOinkType: string = '';
  @Input() currentStep: string = '';
  @Input() steps: any[] = [];

  constructor() {}

  getCheck(step: any): boolean {
    const currentStepIndex = this.steps.findIndex(
      (objeto) => objeto.value === this.currentStep
    );
    if (currentStepIndex !== -1) {
      const currentStep = this.steps[currentStepIndex];
      return step.id <= currentStep.id;
    }
    return false;
  }

  onChange(step: any) {
    if (this.getCheck(step)) {
      this.changeStep.emit(step.value);
    }
  }
}
