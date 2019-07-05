import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = [];

  constructor( private api : ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(res => {
        this.api.getProduct(res.id).subscribe(response => this.product = response);
      });
  }

}
