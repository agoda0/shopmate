import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:any [] = [];
  categories:any [] = [];
  cartProducts:any [] = [];
  
  constructor(private _ProductsService:ProductsService , private spinner:NgxSpinnerService) { 
    
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getCategories();
    
  }

  getAllProducts(){
    this.spinner.show();
    this._ProductsService.getAllProducts().subscribe((results) =>{
      this.products = results;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);      
    }, (error) =>{
      alert(error.message);
    })
  }
  
  getCategories(){
    this.spinner.show();
    this._ProductsService.getAllCategories().subscribe((results) =>{
      this.categories = results;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000); 
    }, (error) =>{
      alert(error.message);
    })
  }
  filterValue(e:any){
    let value = e.target.value;
    (value =="all")? this.getAllProducts() : this.getProductsByCategory(value);
  }

  getProductsByCategory(keyword:string){
    this.spinner.show();
    this._ProductsService.getProductsByCategory(keyword).subscribe((results) =>{
      this.products = results;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    }, (error) =>{
      alert(error.message);
    })
  }

  addToCart(event:any){
    if ( "cart" in localStorage ){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);

      let exist = this.cartProducts.find(item => item.item.id == event.item.id);
      if(exist){
        alert("This Product Is Already In Your Cart");
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
      }
      

      
    } else{
      this.cartProducts.push(event);
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    }
  }

}
