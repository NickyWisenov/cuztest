import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DocTransProjectCardComponent } from './components/doc-trans-project-card/doc-trans-project-card.component';
import { HomeComponent } from './pages/home/home.component';
import { JobTypesComponent } from './components/job-types/job-types.component';
import { OnSiteProjectCardComponent } from './components/on-site-project-card/on-site-project-card.component';

@NgModule({
  declarations: [ SidebarComponent, HeaderComponent, DocTransProjectCardComponent, HomeComponent, JobTypesComponent, OnSiteProjectCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    DashboardRoutingModule
  ]
})

export class DashboardModule { }
