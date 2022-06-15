import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(public http: HttpClient) { }
   
  getProductList() {
    return this.http.get<any[]>("https://credo-shoppingcartv5.herokuapp.com/listproducts")
  }

}
