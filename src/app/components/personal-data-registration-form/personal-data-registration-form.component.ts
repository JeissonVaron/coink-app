import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDocumentType } from 'src/app/interfaces/document-type.interface';
import { IGender } from 'src/app/interfaces/gender.interface';
import { IPersonalInformationForm } from 'src/app/interfaces/personal-information.interface';
import { MOCK_DOCUMENT_TYPES } from 'src/app/mocks/document-types.mock';
import { MOCK_GENDERS } from 'src/app/mocks/genders.mock';
import { BancoinkService } from 'src/app/services/bancoink.service';
import { ERROR_MESSAGES } from 'src/app/shared/constants/error-messages';
import { matchFieldsValidator } from 'src/app/shared/validators/match-fields.validator';

@Component({
  selector: 'app-personal-data-registration-form',
  templateUrl: './personal-data-registration-form.component.html',
  styleUrls: ['./personal-data-registration-form.component.scss'],
})
export class PersonalDataRegistrationFormComponent implements OnInit {
  @Output() personalInformation = new EventEmitter<IPersonalInformationForm>();

  personalInformationForm: FormGroup = new FormGroup({});
  documentTypes: IDocumentType[] = [];
  genders: IGender[] = [];
  showPin: boolean = false;
  showConfirmationPin: boolean = false;
  currentDate: string = '';
  pattern: string = '^[0-9]+$';
  minLenght: number = 4;
  maxLenght: number = 6;

  constructor(
    private fb: FormBuilder,
    private bancoinkService: BancoinkService
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.fetchDocumentTypes();
    this.fetchGenders();
    this.getMaxDate();
  }

  initializeForm() {
    this.personalInformationForm = this.fb.group(
      {
        documentType: new FormControl('', [Validators.required]),
        documentNumber: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
        documentIssueDate: new FormControl('', [Validators.required]),
        dateOfBirth: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        confirmEmail: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        securityPIN: new FormControl('', [
          Validators.required,
          Validators.pattern(this.pattern),
          Validators.minLength(this.minLenght),
          Validators.maxLength(this.maxLenght),
        ]),
        confirmSecurityPIN: new FormControl('', [
          Validators.required,
          Validators.pattern(this.pattern),
          Validators.minLength(this.minLenght),
          Validators.maxLength(this.maxLenght),
        ]),
      },
      {
        validators: [
          matchFieldsValidator('email', 'confirmEmail'),
          matchFieldsValidator('securityPIN', 'confirmSecurityPIN'),
        ],
      }
    );
  }

  get form() {
    return this.personalInformationForm.controls;
  }

  get confirmEmail() {
    return this.personalInformationForm.get('confirmEmail');
  }

  get confirmSecurityPIN() {
    return this.personalInformationForm.get('confirmSecurityPIN');
  }

  onSubmit() {
    this.personalInformation.emit(this.personalInformationForm.value);
  }

  fetchDocumentTypes() {
    this.bancoinkService
      .getDocumentTypes()
      .subscribe((documentTypes: IDocumentType[]) => {
        if (Array.isArray(documentTypes)) {
          this.documentTypes = documentTypes;
        } else this.documentTypes = MOCK_DOCUMENT_TYPES;
      });
  }

  fetchGenders() {
    this.bancoinkService.getGenders().subscribe((genders: IGender[]) => {
      if (Array.isArray(genders)) {
        this.genders = genders;
      } else this.genders = MOCK_GENDERS;
    });
  }

  getMaxDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    this.currentDate = `${year}-${month}-${day}`;
  }

  getErrors(controlName: string): string {
    const control = this.form[controlName];
    if (!control || !control.errors) {
      return '';
    }

    for (const errorKey of Object.keys(control.errors)) {
      if (ERROR_MESSAGES[errorKey]) {
        return ERROR_MESSAGES[errorKey];
      }
    }
    
    return '';
  }
  
}
