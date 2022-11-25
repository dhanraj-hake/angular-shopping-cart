import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit, OnDestroy {

  public category = "";
  public showItem: number =12 ; 

  heightOfCard :{[id:number]:number} = {1:400, 3:335, 4:350};
  height = this.heightOfCard[3];
  col:number = 3;

  order:string = "asc"; 


  products:Product[] = []; 

  subsription: Subscription | undefined;


  constructor(private storeService : StoreService) { }

  ngOnInit(): void {
    console.log(window.screen.width);
    if(window.screen.width <= 800){
      this.col = 1;
    }

    this.getAllProduct();
    
  }
  
  getAllProduct(){
    this.subsription= this.storeService.getAllProduct(this.order, this.showItem.toString(), this.category).subscribe((_products)=>{
      this.products = _products;
      console.log(this.products);
    });
  }

  // getProductsByCategory(){
  //   this.storeService.getAllProduct(this.order, this.showItem.toString(),this.category).subscribe((_products)=>{
  //     this.products = _products;
  //   });
  // }

  onCategore(category:any){
    this.category = category;
    this.getAllProduct();
    console.log(category);
    
  }

  onShowItem(item:any){
    this.showItem = item;
    console.log(this.showItem);
    this.getAllProduct();
  }

  onChangeLayout(col:number){
    this.col = col;
    this.height = this.heightOfCard[this.col];

  }

  oerderOfProducts(order:string){
    this.order = order;
    this.getAllProduct();
  }


  ngOnDestroy(): void {
    if(this.subsription){
      this.subsription.unsubscribe();
    }
  } 

}
