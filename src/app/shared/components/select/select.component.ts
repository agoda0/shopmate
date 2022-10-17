import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() title:string = "";
  @Input() data:any [] = [];
  @Output() selcedValu = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  checkDetected(event:any){
    this.selcedValu.emit(event);
  }
}
