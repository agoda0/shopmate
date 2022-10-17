import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data:any={}
  @Output() item:any = new EventEmitter();
  addBtn:boolean = false;

  amount:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.addBtn = false;
    this.item.emit({item:this.data,quantity:this.amount});
  }
}
