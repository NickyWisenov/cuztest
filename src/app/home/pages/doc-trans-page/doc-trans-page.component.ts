import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  RootStoreState,
  PricemodelStoreActions
} from '../../../root-store'

@Component({
  selector: 'app-doc-trans-page',
  templateUrl: './doc-trans-page.component.html',
  styleUrls: ['./doc-trans-page.component.scss']
})
export class DocTransPageComponent implements OnInit {

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.store$.dispatch(new PricemodelStoreActions.INIT_JOB_TYPE({
      job_type: 2
    }))
  }

}
