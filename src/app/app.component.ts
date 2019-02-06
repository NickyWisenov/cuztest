import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  RootStoreState, 
  CommonStoreSelectors,
  CommonStoreActions
} from './root-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isWatch$: Observable<boolean>;
  title = 'cuzwebapp';

  constructor(private store$: Store<RootStoreState.State>) {
    this.isWatch$ = this.store$.select(
      CommonStoreSelectors.selectCommonIsWatch
    )
    
    // this.isWatch$ = this.store$.pipe(pluck('common', 'isWatch')); // Using pluck and select the state
  }

  ngOnInit () {
  }

  onCloseIntro () {
    this.store$.dispatch(new CommonStoreActions.CloseIntroAction);
  }
}
