import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cart : Cart = {items:[]};
  itemNumbers = this.cart.items.length;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart)=>{
      this.cart = cart;
      this.itemNumbers = cart.items.length;
      console.log(cart);
    })
  }

  getTotal(){
    return this.cartService.getTotal();
  }

  clearCart(){
    this.cartService.clearCart();
  }

}
