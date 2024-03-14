import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {

  constructor(private http: HttpClient) { }


  fetchData() {
    return this.http.get('http://localhost:8484/api/findall');
  }

}
