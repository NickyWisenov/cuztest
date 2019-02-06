import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  RootStoreState,
  PricemodelStoreActions  
} from '../../../root-store';
import { ApiService } from 'src/app/core/http/api.service';
import { HelperService } from '../../helper/helper.service';

@Component({
  selector: 'app-deadline-selector',
  templateUrl: './deadline-selector.component.html',
  styleUrls: ['./deadline-selector.component.scss']
})
export class DeadlineSelectorComponent implements OnInit {

  selected_datetime: string = null;
  public temptime: Date = null;

  show_modal = false;

  constructor(
    private store$: Store<RootStoreState.State>,
    private helperService: HelperService
  ) { }

  ngOnInit() {
  }
  
  onClickHandler(event: any) {
    event.preventDefault();
    this.show_modal = true;
  }

  onClickModalDone() {
    
    this.show_modal = false;

    this.selected_datetime = this.helperService.getFormattedDate(this.temptime); // Display Date
    localStorage.setItem('deadline', this.temptime.toString());
    
    // Set State End Date Value
    const dateTime = this.temptime.toISOString().substr(0, 16);
    this.store$.dispatch(new PricemodelStoreActions.SET_END_DATE({
      end_date: dateTime
    }));
  }

  onClickModalCancel() {
    this.show_modal = false;

    this.temptime =new Date(localStorage.getItem('deadline'));
  }



}
