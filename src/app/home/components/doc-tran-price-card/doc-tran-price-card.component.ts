import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, PricemodelStoreActions }  from '../../../root-store';

@Component({
  selector: 'app-doc-tran-price-card',
  templateUrl: './doc-tran-price-card.component.html',
  styleUrls: ['./doc-tran-price-card.component.scss']
})

export class DocTranPriceCardComponent implements OnInit {
  
  constructor(
    private store$: Store<RootStoreState.State>
  ) { }

  ngOnInit() {
  }

  onCheckHandler(event: any) {
    this.store$.dispatch(new PricemodelStoreActions.SET_LAO_PROJECT({
      is_lao_project: event
    }));
  }
}
