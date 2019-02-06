import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ApiService } from 'src/app/core/http/api.service';
import { Router, ActivatedRoute } from '@angular/router';

import {
  RootStoreState,
  AuthStoreActions
} from '../../../root-store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  
  email: string = '';
  isAgreed: boolean = false;
  nextUrl: string;

  constructor(
    private apiService: ApiService, 
    private router: Router,
    private route: ActivatedRoute,
    private store$: Store<RootStoreState.State>,
  ) { }

  ngOnInit() {
    this.nextUrl = '/security-code'
  }

  onClickCreateBtn() {
    if (this.isAgreed == true) {
      this.apiService.signupWithEmail(this.email).subscribe(
        data => {
          this.store$.dispatch(new AuthStoreActions.SET_EMAIL({
            email:this.email
          }));
          localStorage.setItem('email', this.email);
          this.router.navigate([this.nextUrl]);
        },
        error => {
          console.log('some error', error);
        }
      )
    }
  }
}
