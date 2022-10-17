import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  success:boolean = false;
  cartProducts :any [] = [];
  constructor(private _ProductsService:ProductsService) {
    
  }

  ngOnInit(): void {
    this.getCartProducts();
  }
  getCartProducts(){
    this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
  }
  getCartTotal(){
    let total = 0 ;
    for(let i = 0 ; i < this.cartProducts.length ;i++){
      total+= (this.cartProducts[i].item.price * this.cartProducts[i].quantity);
    }
    return total;
  }

  plusQnty(id:number){
    this.cartProducts[id].quantity ++;
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }
  minsQnty(id:number){
    this.cartProducts[id].quantity --;
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  detectChange(){
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }
  deleteProduct(id:number){
    this.cartProducts.splice(id,1);
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }
  clearCart(){
    this.cartProducts = [];
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    this.getCartTotal();

  }
  addCart(){
    let products = [];
    for(let i =0;i<this.cartProducts.length;i++){
      products.push({productId:this.cartProducts[i].item.id , quantity:this.cartProducts[i].quantity});
    }

    let model = {
      userId:5,
      date:new Date,
      products : products
    }
    this._ProductsService.addCart(model).subscribe((res)=>{
      this.success = true;
    })
  }
}
