import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.scss']
})
export class LocationSelectorComponent implements OnInit {

  show_modal: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  // Show Modal
  onClickHandler(event: any) {
    this.show_modal = true;
  }

  // OnClick Done button
  onClickModalDone() {
    this.show_modal = false;
  }
}
