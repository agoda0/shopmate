import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id:any;
  productDetails:any; 
  constructor(private route:ActivatedRoute,private _ProductsService:ProductsService,private spinner:NgxSpinnerService) { 
    this.id = route.snapshot.paramMap.get("id");
    this.getSingleProduct();
  }

  ngOnInit(): void {
  }
  getSingleProduct(){
    this.spinner.show();
    this._ProductsService.getSingleProduct(this.id).subscribe(result =>{
      this.productDetails = result;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000); 
    })
  }
}
