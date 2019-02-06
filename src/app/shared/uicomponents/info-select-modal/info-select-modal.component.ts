import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-info-select-modal',
  templateUrl: './info-select-modal.component.html',
  styleUrls: ['./info-select-modal.component.scss'],
  animations: [
    trigger('info-select-modal', [
      transition('void => *', [
        style({ transform: 'scale3d(.6,.6,.6) ', opacity: 0.8}),
        animate("400ms ease")
      ]),
      transition('* => void', [
        animate("400ms ease", style({ transform: 'scale3d(0.6, 0.6, 0.6)', opacity: 0.6 }))
      ])
    ])
  ]
})
export class InfoSelectModalComponent implements OnInit {
  @Input() showable: boolean;
  @Input() public ClickDoneBtn:  Function;
  @Input() public ClickCancelBtn: Function;
  @Output() showableChange = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  ClickCancelBtnEvent() {
    this.showableChange.emit(false);
  };
  

}
