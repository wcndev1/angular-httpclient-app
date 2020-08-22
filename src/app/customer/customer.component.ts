import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpResponse} from '@angular/common/http';
import { Customer } from '../customer.service';
import { Subscription } from 'rxjs';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, ParamMap, Router, Data } from '@angular/router';
import { Observable,throwError } from 'rxjs';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  customerResponse:  any= [];
  eventSubscriber?: Subscription;
  custId: number;

  constructor(
    public customerService: CustomerService
  ) {}
  
  ngOnInit(): void {
   
  }

  findByCustId() {
    return this.customerService.findByCustId(this.custId).subscribe(response => {
        console.log(response);
        console.log(response.body);
        this.customerResponse = response;
      }, err => {
             console.log("User authentication failed!");
    });
    
  }
}
