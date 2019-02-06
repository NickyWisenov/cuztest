import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { commonReducer } from './reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('common', commonReducer)
    ],
    providers: []
})

export class CommonStoreModule {}
