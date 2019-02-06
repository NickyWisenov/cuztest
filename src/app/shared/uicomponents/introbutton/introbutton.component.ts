import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-introbutton',
  templateUrl: './introbutton.component.html',
  styleUrls: ['./introbutton.component.scss']
})
export class IntrobuttonComponent implements OnInit {
  @Input()
  public onClick: Function;

  constructor() { }

  ngOnInit() {
  }

  onClickHandler (event: any) {
    event.preventDefault();
    this.onClick();
  }
}
 