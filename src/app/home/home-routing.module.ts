import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocTransPageComponent } from './pages/doc-trans-page/doc-trans-page.component';
import { OnSiteInterpreterComponent } from './pages/on-site-interpreter/on-site-interpreter.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'doc-trans', component: DocTransPageComponent },
  { path: 'on-site', component: OnSiteInterpreterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
