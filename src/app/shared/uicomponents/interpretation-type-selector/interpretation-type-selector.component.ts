import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpretation-type-selector',
  templateUrl: './interpretation-type-selector.component.html',
  styleUrls: ['./interpretation-type-selector.component.scss']
})
export class InterpretationTypeSelectorComponent implements OnInit {
  show_modal: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onClickHandler(event: any) {
    this.show_modal = true;
  }
  
  onClickModalDoneBtn() {
    this.show_modal = false;
  }

}
