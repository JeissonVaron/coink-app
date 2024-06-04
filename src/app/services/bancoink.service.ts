import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// environment
import { environment } from 'src/environments/environment';
import { IDocumentType } from '../interfaces/document-type.interface';
import { IGender } from '../interfaces/gender.interface';

@Injectable({
  providedIn: 'root',
})
export class BancoinkService {
  constructor(private http: HttpClient) {}

  getDocumentTypes(): Observable<IDocumentType[]> {
    const url = `${environment.baseUrl}/documentTypes?apiKey=${environment.apiKey}`;
    return this.http.get<IDocumentType[]>(url);
  }

  getGenders(): Observable<IGender[]> {
    const url = `${environment.baseUrl}/genders?apiKey=${environment.apiKey}`;
    return this.http.get<IGender[]>(url);
  }
}
