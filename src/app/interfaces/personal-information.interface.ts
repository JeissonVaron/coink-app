export interface IPersonalInformationForm {
    documentType: string;
    documentNumber: number | string;
    documentIssueDate: string;
    dateOfBirth: string;
    gender: string;
    email: string;
    confirmEmail: string;
    securityPIN: string;
    confirmSecurityPIN: string;
  }