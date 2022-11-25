import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  URL = "https://fakestoreapi.com";
  constructor(private http:HttpClient) { }

  getAllProduct(sort = 'desc',limit='12', category?:string ):Observable<Product[]>{
    
    if(category !=""){
      return this.http.get<Product[]>(`${this.URL}/products/category/${category}?sort=${sort}&limit=${limit}`);
    }
    
    return this.http.get<Product[]>(`${this.URL}/products/?sort=${sort}&limit=${limit}`);
  }

  getCategorys():Observable<string[]>{
    return this.http.get<string[]>(`${this.URL}/products/categories`);
  }

}
