import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/productlist.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  listOfProducts: any[] = [];
  isLoader = true;

  constructor(public productList: ProductlistService) { }

  ngOnInit(): void {
    this.productList.getProductList().subscribe({
      next: (res) => {
        console.log("res:::", res);
        this.listOfProducts = res;
        this.isLoader = false;
      }, error: (errorData: any)=> {
        console.log(errorData)
      }, complete: () => {
        console.log("Complete")
      }
    })
  }

}
