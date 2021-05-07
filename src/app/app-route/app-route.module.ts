import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home/home.component';

import { LoginComponent } from '../login/login.component';

import { ProductDetailComponent } from '../catalog/product-detail/product-detail.component';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';





const routes: Routes = [

  {

    path: '',

    pathMatch: 'full',

    redirectTo: 'home'

  }, 

  {

    path: 'home',

    component: HomeComponent

  },

  {

    path: 'login',

    component: LoginComponent

  },

  {

    path: 'contact',

    component: ContactComponent

  },

  {

    path: 'portfolio',

    component: PortfolioComponent

  }, 

  {

    path: '**',

    component: PageNotFoundComponent

  }

 ];



@NgModule({

  declarations: [],

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule] 

})

export class AppRouteModule { }