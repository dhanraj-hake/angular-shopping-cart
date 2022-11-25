import { Component, EventEmitter, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() categoresSend = new EventEmitter<string>();


  public categores = ["Sport", "Mobile", "Laptop"];

  constructor() { }

  ngOnInit(): void {
  }

  sendCategores(categore:string){
    this.categoresSend.emit(categore);
    // console.log(categore);
  }

}
