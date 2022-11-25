import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-shopnav',
  templateUrl: './shopnav.component.html',
  styleUrls: ['./shopnav.component.css']
})
export class ShopnavComponent implements OnInit {

  @Output() showItemEvent = new EventEmitter<number>();

  @Output() dsiplayItemEvent = new EventEmitter<number>();

  @Output() orderEvent = new EventEmitter<string>();

  @Output() categoryEvent = new EventEmitter<string>();

  public categorys = ["Sport", "Mobile", "Laptop"];

  public order = "asc";

  public showItems:number = 10;
  
  displayItems :number = 3; 

  hideSixGrid = false;
  hideThreeGrid = false;

  constructor(private storeService : StoreService) { }

  ngOnInit(): void {
    if(window.screen.width<=800){
      this.hideSixGrid = true;
      this.hideThreeGrid = true;
    }

    this.storeService.getCategorys().subscribe((_categorys)=>{
      this.categorys = _categorys;
    })

  }

  orderOfResult(order:string){
    this.order = order;
    this.orderEvent.emit(this.order);
  }

  changeShowItem(item:number){
    this.showItems = item;
    this.showItemEvent.emit(item);
  }

  onDisplayItems(items:number){
    this.dsiplayItemEvent.emit(items);
  }

  sendCategores(categore:string){
    this.categoryEvent.emit(categore);
  }

}
