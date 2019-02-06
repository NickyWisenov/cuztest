import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  RootStoreState,
  CommonStoreActions
} from '../../../root-store';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit {
  
  signupUrl = '/sign-up';
  loginUrl = '/login';

  constructor(
    private store$: Store<RootStoreState.State>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  watchIntro() {
    this.store$.dispatch(new CommonStoreActions.WatchIntroAction);
  }

  onClickNewAccountBtn() {
    this.router.navigate([this.signupUrl]);
  }

  onClickLoginBtn() {
    this.router.navigate([this.loginUrl]);
  }
}
