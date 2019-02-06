import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocTransProjectCardComponent } from './components/doc-trans-project-card/doc-trans-project-card.component';
import { HomeComponent } from '../dashboard/pages/home/home.component';
import { JobTypesComponent } from './components/job-types/job-types.component';
import { OnSiteProjectCardComponent } from './components/on-site-project-card/on-site-project-card.component';
import { JobButtonComponent } from '../shared/uicomponents/job-button/job-button.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent,
    children:  [
      { path: '', component: JobTypesComponent },
      { path: 'doc-trans-project', component: DocTransProjectCardComponent },
      { path: 'on-site-project', component: OnSiteProjectCardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
