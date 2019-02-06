import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { SelectLangComponent } from './uicomponents/select-lang/select-lang.component';
import { InfoSelectModalComponent } from './uicomponents/info-select-modal/info-select-modal.component';
import { GeneralButtonComponent } from './uicomponents/general-button/general-button.component';
import { CustomSwitchComponent } from './uicomponents/custom-switch/custom-switch.component';
import { IntrobuttonComponent } from './uicomponents/introbutton/introbutton.component';
import { IntrovideoComponent } from './uicomponents/introvideo/introvideo.component';
import { JobButtonComponent } from './uicomponents/job-button/job-button.component';
import { LoginSectionButtonComponent } from './uicomponents/login-section-button/login-section-button.component';
import { DocTypeSelectorComponent } from './uicomponents/doc-type-selector/doc-type-selector.component';
import { DocUploaderComponent } from './uicomponents/doc-uploader/doc-uploader.component';
import { DeadlineSelectorComponent } from './uicomponents/deadline-selector/deadline-selector.component';
import { CalcResultWrapperComponent } from './uicomponents/calc-result-wrapper/calc-result-wrapper.component';
import { SearchInputComponent } from './uicomponents/search-input/search-input.component';
import { LocationSelectorComponent } from './uicomponents/location-selector/location-selector.component';
import { InterpretationTypeSelectorComponent } from './uicomponents/interpretation-type-selector/interpretation-type-selector.component';
import { DatePickerComponent } from './uicomponents/date-picker/date-picker.component';

import { HelperService } from './helper/helper.service';

@NgModule({
  declarations: [
    SelectLangComponent,
    InfoSelectModalComponent,
    GeneralButtonComponent,
    CustomSwitchComponent,
    IntrobuttonComponent,
    IntrovideoComponent,
    JobButtonComponent,
    LoginSectionButtonComponent,
    DocTypeSelectorComponent,
    DocUploaderComponent,
    DeadlineSelectorComponent,
    CalcResultWrapperComponent,
    SearchInputComponent,
    LocationSelectorComponent,
    InterpretationTypeSelectorComponent,
    DatePickerComponent
  ],
  exports: [
    SelectLangComponent,
    InfoSelectModalComponent,
    GeneralButtonComponent,
    CustomSwitchComponent,
    IntrobuttonComponent,
    IntrovideoComponent,
    JobButtonComponent,
    LoginSectionButtonComponent,
    DocTypeSelectorComponent,
    DocUploaderComponent,
    DeadlineSelectorComponent,
    CalcResultWrapperComponent,
    SearchInputComponent,
    LocationSelectorComponent,
    InterpretationTypeSelectorComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    HelperService
  ]
})
export class SharedModule { }
