import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Customer } from 'src/app/shared/customer.model';
import { CustomerService } from 'src/app/shared/customer.service';
import { OrderService } from 'src/app/shared/order.service';
import { OrderItemsComponent } from '../order-items/order-items.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {
  customerList : []
  constructor(public service: OrderService, private Dialogue: MatDialog, private customerService: CustomerService) { }

  ngOnInit() {
   this.resetForm()
   this.customerService.getCustomerList().then( res => this.customerList)
  }
  resetForm(form?:NgForm ){
    if (form==null)
    //this.resetForm()        
    this.service.formData = {
    OrderID: 0,
    OrderNo:Math.floor(100000+Math.random()*900000).toString(),
    CustomerID:0,
    PMethod:'',
    GTotal:0
    }
    this.service.orderItems = []
  }
  AddorEditOrderItems(orderItemIndex:any,OrderID:number){
    const dialogueConfig = new MatDialogConfig();
    dialogueConfig.autoFocus = true;
    dialogueConfig.disableClose = false;
    dialogueConfig.width = '50%';
    dialogueConfig.height = '60%'
    dialogueConfig.data = {orderItemIndex,OrderID}
    this.Dialogue.open(OrderItemsComponent,dialogueConfig).afterClosed().subscribe( res => {
      this.updateTotal();
    })

  }
  deleteOrderItems(OrderItemID:number,i:number){
    this.service.orderItems.splice(i,1)
    this.updateTotal();
  }
 
  updateTotal(){
    this.service.formData.GTotal = this.service.orderItems.reduce((pre,curr)=>{ 
      return pre + curr.Total;
    },0) 
    this.service.formData.GTotal = parseFloat((this.service.formData.GTotal).toFixed(2))
  }
}
