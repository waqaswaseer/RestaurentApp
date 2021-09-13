import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [
  ]
})
export class OrdersComponent implements OnInit {
  listitems:any
  constructor() { }

  ngOnInit(): void {
    //this.service.GetItems().subscribe((res:any) =>{
      //this.listitems = res
    //})
  }

}
