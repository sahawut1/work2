import { Component, OnInit , ViewChild, ViewChildren, QueryList} from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { Product } from '../../models/product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductItemComponent)
  productItems: QueryList<ProductItemComponent>;
  
  products: Product[];

  constructor(private backendService: BackendService) {
    
    this.products = [];
    this.products.push({
      name: 'ส้มโอ',
      price: 990
 });
    this.products.push({
      name: 'แตงโม',
      price: 1000
 });
    this.products.push({
      name: 'มะพร่าวนํ้าหอม',
      price: 500
 });

   }

  ngOnInit(): void {
    this.products = this.backendService.getProducts();
  }
  selectedProduct(productComponent: ProductItemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p => {
    p.isSelected = false;
    });
    productComponent.isSelected = true;
    }
   
}
