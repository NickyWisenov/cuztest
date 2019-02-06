import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component'
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './components/signup/signup.component';
import { SecurityCodeComponent } from './components/security-code/security-code.component';
import { LoginComponent } from './components/login/login.component';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WelcomeComponent,
    SignupComponent,
    SecurityCodeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CountdownModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
