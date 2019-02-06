import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-switch',
  templateUrl: './custom-switch.component.html',
  styleUrls: ['./custom-switch.component.scss']
})
export class CustomSwitchComponent implements OnInit {
  @Output()
  checkEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCheck(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    this.checkEvent.emit(target.checked);
  }
}
