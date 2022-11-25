import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []});

  constructor() {

    // product : string;
    // name : string;
    // price : number;
    // quantity : number;
    // id : number;

    let localCart = localStorage.getItem("cart");

    if(localCart!=null){
      let jsonObj:CartItem[] = JSON.parse(localCart);
      this.cart.value.items.push(...jsonObj);
    }

   }


  addInCart(item : CartItem){

    const newCart = [...this.cart.value.items];

    let itemInCart = this.cart.value.items.find((_item)=>_item.id == item.id  );

    if(itemInCart){
      itemInCart.quantity +=1;
    }
    else{
      newCart.push(item);
    }
    
    // this.cart.value.items = newCart;

    this.cart.next({items:newCart});

    localStorage.setItem("cart", JSON.stringify(this.cart.value.items));

  }


  getTotal(){
    return this.cart.value.items.map((item)=>item.price*item.quantity).
    reduce((prev, next)=>prev+next , 0)
  }

  clearCart(){
    this.cart.next({items:[]});
    localStorage.setItem("cart", JSON.stringify(this.cart.value.items));
  }

  reduceQuantity(item:CartItem){
    item.quantity -=1;

    if(item.quantity<=0){
      this.removeItem(item);
    }
    localStorage.setItem("cart", JSON.stringify(this.cart.value.items));

  }

  removeItem(item:CartItem){

    let newCart = this.cart.value.items.filter((_item)=> _item.id != item.id);

    this.cart.next({items:newCart});
    localStorage.setItem("cart", JSON.stringify(this.cart.value.items));
  }

  
}
