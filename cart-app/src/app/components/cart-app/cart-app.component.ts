import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogComponent, CartComponent],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit{
  products: Product[] = [];
  items: CartItem[] = [];
  constructor(private service: ProductService){

  }
  ngOnInit(): void {
    this.products = this.service.findAll();
    //throw new Error('Method not implemented.');
  }
  onAddCart(product: Product){
    this.items = [... this.items, {product: {... product}, quantity:1}]
  }
}
