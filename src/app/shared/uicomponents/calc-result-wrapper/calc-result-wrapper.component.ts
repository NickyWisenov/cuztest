import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calc-result-wrapper',
  templateUrl: './calc-result-wrapper.component.html',
  styleUrls: ['./calc-result-wrapper.component.scss']
})
export class CalcResultWrapperComponent implements OnInit {

  @Input()
  item_name = 'PRICE AMOUNT';
  @Input()
  amount = '';
  @Input()
  color = '';
  @Input()
  unit = '';
  constructor() { }

  ngOnInit() {
  }

}
