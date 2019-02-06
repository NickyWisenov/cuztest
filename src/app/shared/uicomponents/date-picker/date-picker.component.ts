import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Input()
  display_date_name: string = 'Starting Date';
  @Input()
  type: string = '';

  show_modal: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.type == 'starting-date') {
      this.display_date_name = 'Starting Date';
    } else {
      this.display_date_name = 'Ending Date';
    }
  }

  onClickHandler(event: any) {
    this.show_modal = true;
  }

  onClickModalDoneBtn() {
    this.show_modal = false;
  }
}
