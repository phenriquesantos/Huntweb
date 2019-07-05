import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: [];
  productInfo: [];

  constructor( private api: ApiService ) { }

  ngOnInit() {
    this.getProducts();
  }


  getProducts(page = 1){
    this.api.getAll(page).subscribe(response => {
      let {docs, ...productInfo} = response;
      this.products = docs;
      this.productInfo = productInfo;
    }, error => console.log(error));
  }

  pagePrev(){
    if(parseInt(this.productInfo.page) > 1){
      this.getProducts(this.productInfo.page - 1);
    }
  }

  pageNext(){
    if(parseInt(this.productInfo.page) < this.productInfo.pages){
      this.getProducts(parseInt(this.productInfo.page) + 1);
    }
  }
}
