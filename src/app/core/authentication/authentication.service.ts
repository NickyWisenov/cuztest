import { Injectable } from '@angular/core';

import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private apiService: ApiService ) {}

  signUp(email: string){
    return this.apiService.signupWithEmail(email).subscribe(
      data => {
        return data;
      },
      error => {
        return error;
      }
    );
  }

}
