import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CommonStoreModule } from './common-store';
import { PricemodelStoreModule } from './pricemodel-store';
import { AuthStoreModule } from './auth-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonStoreModule,
    PricemodelStoreModule,
    AuthStoreModule,
    StoreModule.forRoot({})
  ],
})

export class RootStoreModule { }
