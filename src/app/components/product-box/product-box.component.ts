import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {

  @Input() product : Product = {
    id: 0,
    title: '',
    image : '',
    description : "",
    price : 0
  };

  @Input() public col = 3;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    
  }

  addToCart(){
    this.cartService.addInCart({
      product : this.product.image, 
      name : this.product.title, 
      price : this.product.price, 
      quantity : 1, 
      id : this.product.id, 
    })
  }

}
