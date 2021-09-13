import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  //readonly rootUrl = 'http://localhost:52413/'
  constructor(private http:HttpClient) { }
  getItemList(){
    return this.http.get(environment.apiURL+'api/items');
  }
}
