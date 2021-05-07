import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { FormsModule } from '@angular/forms';
import { CatalogBossModule } from './catalog/catalog-boss/catalog-boss.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './catalog/product-detail/product-detail.component';
import { AppRouteModule } from './app-route/app-route.module';
import { NavbarComponent } from './home/navbar/navbar.component';
import { MaincontentComponent } from './home/maincontent/maincontent.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { AboutmeComponent } from './aboutme/aboutme.component';

  
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    LoginComponent,
    NavbarComponent,
    MaincontentComponent,
    ContactComponent,
    PortfolioComponent,
    AboutmeComponent
   
  ],
  imports: [BrowserModule,
     FormsModule,
     CatalogBossModule,
     AppRouteModule],

  providers: [BackendService],
  bootstrap: [AppComponent]
  


})

export class AppModule { }
