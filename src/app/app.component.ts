import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { BackendService } from './backend.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  //@ViewChild('productList')
  //productList: ProductListComponent;
  ngOnInit(): void {
    //this.productList.products = this.backendService.getProducts();
 
  }
  //constructor(private backendService: BackendService) {}
}
