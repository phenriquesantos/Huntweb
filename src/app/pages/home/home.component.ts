import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any;

  constructor( private api: ApiService ) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.api.listar().subscribe(response => {
      this.products = response;
    });
  }
}
