import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl = 'https://rocketseat-node.herokuapp.com/api';
  response: any;

  constructor( private http: HttpClient ) { }

  getAll(page: number){
    return this.http.get(`${this.apiUrl}/products?page=${page}`);
  }

  getProduct(id: string){
    return this.http.get(`${this.apiUrl}/products/${id}`);
  }
}
