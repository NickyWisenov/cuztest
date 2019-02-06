import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-section-button',
  templateUrl: './login-section-button.component.html',
  styleUrls: ['./login-section-button.component.scss']
})
export class LoginSectionButtonComponent implements OnInit {
  @Input()
  public route_dest: string
  @Input()
  icon = ''
  @Input()
  public ClickHandler: Function
  
  constructor() { }

  ngOnInit() {
  }

}
