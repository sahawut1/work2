import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { BackendService } from 'src/app/backend.service';


@NgModule({
  declarations: [ProductListComponent,ProductItemComponent],
  imports: [CommonModule],
  providers: [BackendService],
  exports: [ProductListComponent,ProductItemComponent]
})
export class CatalogBossModule { }
