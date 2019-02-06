import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../../core/http/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { 
  RootStoreState,
  AuthStoreSelectors
} from '../../../root-store';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-security-code',
  templateUrl: './security-code.component.html',
  styleUrls: ['./security-code.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SecurityCodeComponent implements OnInit {

  email: string;
  logincode: string = '';
  jobtypeUrl: string = '/job-type';

  constructor(
    private store$: Store<RootStoreState.State>,
    private apiService: ApiService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // --- When stored in the store --- :

    // this.store$.select(
    //   AuthStoreSelectors.selectAuthEmail
    // ).subscribe(email => 
    //   this.email = email
    // );

    this.email = localStorage.getItem('email');

    this.apiService.requestTempPassword(1, this.email).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
  // On Finishing Count Down
  onFinishCountingDown() {
    alert('Your Code is expired, Please Send Again.')
  }
  // On Click Continue Login or Sign Up
  onClickContinueBtn() {
    this.apiService.login(3, this.email, this.logincode).subscribe(
      data => {
        this.router.navigate([this.jobtypeUrl]);
        console.log(data);
      }, 
      error => {
        console.log(error);
      }
    )
  }

  onClickResendCode() {
    
  }

}
