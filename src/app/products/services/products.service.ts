import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>
  {
    return this.http.get(environment.baseApi + `products`);
  }

  getAllCategories():Observable<any>
  {
    return this.http.get(environment.baseApi + `products/categories`)
  }

  getProductsByCategory(keyword:string):Observable<any>
  {
    return this.http.get(environment.baseApi + `products/category/${keyword}`);
  }
  getSingleProduct(id:number):Observable<any>
  {
    return this.http.get(environment.baseApi + `products/${id}`);
  }
  addCart(data:any):Observable<any>
  {
    return this.http.post(environment.baseApi + `carts`,data);
  }

}
