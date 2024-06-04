import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-informative-oink',
  templateUrl: './informative-oink.component.html',
  styleUrls: ['./informative-oink.component.scss'],
})
export class InformativeOinkComponent implements OnChanges {
  @Input() type: string = 'Oink';
  title: string = '';
  description: string = '';
  image: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.showInformationByType();
  }

  showInformationByType() {
    switch (this.type) {
      case 'OinkM':
        this.setOinkM();
        break;
      case 'OinkPolice':
        this.setOinkPolice();
        break;
      default:
        this.setOink();
        break;
    }
  }

  setOink() {
    this.image = './../../../assets/icon/informative-coink-logo.png';
    this.description = 'Para comenzar, por favor ingresa <b style="color: #757575;">tu número celular.</b>';
  }

  setOinkM() {
    this.image = './../../../assets/icon/informative-coinkM-logo.png';
    this.title = '<b>¿CUÁLES SON TUS DATOS?</b>';
    this.description = 'Ahora necesitamos saber algunos datos tuyos';
  }

  setOinkPolice() {
    this.image = './../../../assets/icon/informative-coinkPolice-logo.png';
    this.title = '<b>ESTAS MUY CERCA DE SER PARTE DE COINK.</b>';
    this.description =
      'Solo es necesario que leas detenidamente el contrato que se encuentra al final de esta pantalla y lo aceptes.';
  }
}
