import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://cuz-test-dot-cuz-tech.appspot.com';
  API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZ1cmthbnptY0BvdXRsb29rLmNvbSIsIm9yaWdfaWF0IjoxNTQ2NTY4MzQxLCJ1c2VyX2lkIjo4NiwiZW1haWwiOiJmdXJrYW56bWNAb3V0bG9vay5jb20iLCJleHAiOjE1NDkxNjAzNDF9.BZeopEK0o9UkcXnuYoVOdIhdxnsfnH_tHhYrRI66fyw'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  httpOptionsPrice = {
    headers: new HttpHeaders({
      'Authorization': 'JWT ' + this.API_TOKEN
    })
  }
  constructor(private http: HttpClient) {}

  // Sign With Email into Cuz
  signupWithEmail(email: string): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/register/`, {
      email: email
    }, this.httpOptions);
  }

  // Login With Email and Password(Account PW or Temp PW)
  login(platform: number, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login/`, {
      platform: platform,
      email: email,
      password: password
    }, this.httpOptions);
  }

  // Request Temp Password to login, signup or reset password
  requestTempPassword(password_type: number, email: string): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/users/temporary-password/`, {
      password_type: password_type,
      email: email
    }, this.httpOptions);
  }

  // Get List of Langs
  getListOfLanguages(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/languages/`, this.httpOptionsPrice);
  }

  // Get List of Nature
  getListOfNatuers(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/nature-groups/`, this.httpOptionsPrice);
  }

  // Create Job Document
  createJobDocument(request: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/jobs/documents/`, request, this.httpOptionsPrice);
  }

  // Upload to the Google Cloud Storage with job document Url of the job document instance.
  uploadToStorage(url: string, file: any): Observable<any> {
    return this.http.post<any>(url, { data: file }, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      })
    });
  }

  // Check status of document
  checkStatusOfDoc(fileId: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/jobs/documents/` + fileId, this.httpOptionsPrice);
  }

  // Get Document from API
  getDocument(fileId: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/jobs/documents/` + fileId, this.httpOptionsPrice);
  }

  
}
