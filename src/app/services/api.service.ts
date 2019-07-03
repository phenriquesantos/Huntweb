import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl = 'https://rocketseat-node.herokuapp.com/api';
  response: any;

  constructor( private http: HttpClient ) { }

  listar(page = 1){
    return this.http.get(`${this.apiUrl}/products?page=${page}`);
  }

}
