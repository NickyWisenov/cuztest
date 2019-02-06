import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ApiService } from 'src/app/core/http/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger(
      'enterAnimation', [
        transition('void => *', [
          style({opacity: 0}),
          animate('300ms', style({opacity: 1}))
        ]),
        transition('* => void', [
          style({opacity: 1}),
          animate('300ms', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class LoginComponent implements OnInit {
  
  email: string = '';
  password: string = '';
  logincode: string = '';
  active_tab = "password";
  jobtypeUrl = "/job-type";

  constructor(
    private apiService: ApiService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onClickHandler (event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    this.active_tab = target.dataset.tabname;
  }

  onClickLoginBtn () {
    if (this.active_tab == 'password') {
      this.apiService.login(3, this.email, this.password).subscribe(
        data => {
          this.router.navigate([this.jobtypeUrl]);
        },
        error => {
          console.log(error.error.status.parameters.password[0]);
        }
      )
    } else if (this.active_tab == 'login-code') {
      this.router.navigate([this.jobtypeUrl]);
    }
  }

}
