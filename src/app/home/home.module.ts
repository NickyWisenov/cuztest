import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DocTransPageComponent } from './pages/doc-trans-page/doc-trans-page.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DocTranPriceCardComponent } from './components/doc-tran-price-card/doc-tran-price-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OnSiteInterpreterComponent } from './pages/on-site-interpreter/on-site-interpreter.component';
import { OnSiteInterpreterPriceCardComponent } from './components/on-site-interpreter-price-card/on-site-interpreter-price-card.component';
import { DocumentTranslationHeroComponent } from './components/document-translation-hero/document-translation-hero.component';

@NgModule({
  declarations: [
    DocTransPageComponent, 
    HomeComponent, 
    DocTranPriceCardComponent, 
    NavbarComponent,
    OnSiteInterpreterComponent,
    OnSiteInterpreterPriceCardComponent,
    DocumentTranslationHeroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
