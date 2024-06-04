import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PersonalDataRegistrationFormComponent } from './personal-data-registration-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IDocumentType } from 'src/app/interfaces/document-type.interface';
import { MOCK_DOCUMENT_TYPES } from 'src/app/mocks/document-types.mock';
import { of } from 'rxjs';
import { BancoinkService } from 'src/app/services/bancoink.service';
import { IGender } from 'src/app/interfaces/gender.interface';
import { MOCK_GENDERS } from 'src/app/mocks/genders.mock';

describe('PersonalDataRegistrationFormComponent', () => {
  let component: PersonalDataRegistrationFormComponent;
  let fixture: ComponentFixture<PersonalDataRegistrationFormComponent>;
  let bancoinkService: BancoinkService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalDataRegistrationFormComponent],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalDataRegistrationFormComponent);
    bancoinkService = TestBed.inject(BancoinkService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly call onSubmit() method', () => {
    spyOn(component.personalInformation, 'emit');
    component.onSubmit();
    expect(component.personalInformation.emit).toHaveBeenCalled();
  });

  it('should fetch document types', () => {
    const mockDocumentTypes: IDocumentType[] = MOCK_DOCUMENT_TYPES;
    spyOn(bancoinkService, 'getDocumentTypes').and.returnValue(of(mockDocumentTypes));
    component.fetchDocumentTypes();
    expect(component.documentTypes).toEqual(mockDocumentTypes);
  });

  it('should correctly handle errors in fetchDocumentTypes()', () => {
    const mockDocumentTypes: IDocumentType[] = MOCK_DOCUMENT_TYPES;
    spyOn(bancoinkService, 'getDocumentTypes').and.returnValue(of({} as IDocumentType[]));
    component.fetchDocumentTypes();
    expect(component.documentTypes).toEqual(mockDocumentTypes);
  });

  it('should fetch genders', () => {
    const mockGenders: IGender[] = MOCK_GENDERS;
    spyOn(bancoinkService, 'getGenders').and.returnValue(of(mockGenders));
    component.fetchGenders();
    expect(component.genders).toEqual(mockGenders);
  });

  it('should correctly handle errors in fetchGenders()', () => {
    const mockGenders: IGender[] = MOCK_GENDERS;
    spyOn(bancoinkService, 'getGenders').and.returnValue(of({} as IGender[]));
    component.fetchGenders();
    expect(component.genders).toEqual(mockGenders);
  });
});
