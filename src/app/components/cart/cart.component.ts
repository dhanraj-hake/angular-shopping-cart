import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : Cart  = {items: [{
    product : "https://via.placeholder.com/200",
    name : "Redmi",
    price : 20000,
    quantity : 1,
    id : 1
  },
  {
    product : "https://via.placeholder.com/200",
    name : "Redmi",
    price : 20000,
    quantity : 1,
    id : 1
  }
]};


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart)=>{
      this.cart = _cart;
    });
  }

  clearCart(){
    this.cartService.clearCart();
  }

  addQuantity(item:CartItem){
    this.cartService.addInCart(item);
  }

  reduceQuantity(item:CartItem){
    this.cartService.reduceQuantity(item);
  }

  removeItem(item:CartItem){
    this.cartService.removeItem(item);
  }

  getTotal(){

    return this.cartService.getTotal();
  }

}
