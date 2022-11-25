import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor(private cartService : CartService) { }
  submited = false;
  ngOnInit(): void {
  }

  placeOrder(form:NgForm){
    console.log(this.cartService.cart.value.items);
    console.log(form.value);
    this.cartService.clearCart();
    this.submited = true;
  }

}
