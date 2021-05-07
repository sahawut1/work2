import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MaincontentComponent } from '../maincontent/maincontent.component';



@NgModule({
  declarations: [NavbarComponent,MaincontentComponent],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent,MaincontentComponent]
})
export class HomeBossModule { }
