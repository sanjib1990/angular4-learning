import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order/order.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    public orders: any[];

    constructor(private orderService: OrderService) {
    }

    ngOnInit() {
        this.orderService.getOrders().subscribe(orders => this.orders = orders);
    }

}
