import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  RootStoreState,
  PricemodelStoreActions  
} from '../../../root-store';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-doc-type-selector',
  templateUrl: './doc-type-selector.component.html',
  styleUrls: ['./doc-type-selector.component.scss']
})
export class DocTypeSelectorComponent implements OnInit {

  show_modal = false;
  doctype = null;
  selected_nature = null;
  temp_nature = null;
  nature_groups = null;

  constructor(
    private store$: Store<RootStoreState.State>,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getListOfNatuers().subscribe(
      data => {
        this.nature_groups = data.nature_groups;
      },
      error => {
        console.log(error);
      }
    )
  }

  onClickHandler(event: any) {
    event.preventDefault();
    this.show_modal = true;
  }

  onSelectDoctype (nature: any, event: any) {
    event.preventDefault();
    this.selected_nature = nature;

    
  }

  onClickModalDoneBtn() {
    this.show_modal = false;
    
    this.store$.dispatch(new PricemodelStoreActions.SET_NATURE({
      nature: this.selected_nature.id
    }));

    localStorage.setItem('nature', JSON.stringify(this.selected_nature));
  }

  onClickModalCancelBtn() {
    this.show_modal = false;
    this.selected_nature = JSON.parse(localStorage.getItem('nature'));
  }

}
