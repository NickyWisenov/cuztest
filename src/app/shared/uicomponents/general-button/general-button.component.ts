import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-button',
  templateUrl: './general-button.component.html',
  styleUrls: ['./general-button.component.scss']
})
export class GeneralButtonComponent implements OnInit {
  @Input() color: string;
  @Input() type: string;
  
  constructor() { }

  ngOnInit() {
  }

}
