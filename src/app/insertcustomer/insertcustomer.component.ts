import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AppRoutingModule } from '../app-routing.module';
import { FormGroup,FormControl } from '@angular/forms';


export class InsertCustomerRequest{
  public address: string;
  public addressId: string;
  public createBy: string;
  public cusCode: string;
  public cusId: string;
  public email: string;
  public ibCode: string;
  public idCard: string;
  public latestBill: string;
  public nickName: string;
  public payTime: string;
  public registerDate: string;
  public rname: string;
  public sentFile: string;
  public sname: string;
  public tel: string;
  public updateBy: string;

}


@Component({
  selector: 'app-insertcustomer',
  templateUrl: './insertcustomer.component.html',
  styleUrls: ['./insertcustomer.component.css']
})
export class InsertcustomerComponent implements OnInit {
  insertCustomerRequest= new InsertCustomerRequest();
  //get value form html
  profileForm = new FormGroup({
    cusId: new FormControl(''),
    cusCode: new FormControl(''),
    address: new FormControl(''),
    addressId: new FormControl(''),
    rname: new FormControl(''),
    sname: new FormControl(''),
    email: new FormControl(''),
    ibCode: new FormControl(''),
    idCard: new FormControl(''),
    latestBill: new FormControl(''),
    nickName: new FormControl(''),
    payTime: new FormControl(''),
    registerDate: new FormControl(''),
    sentFile: new FormControl(''),
    tel: new FormControl(''),
  });


  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
  }
  createCustomer() {
    this.setModel(this.profileForm.value);
    this.customerService.createCustomer(this.insertCustomerRequest).subscribe(data => {      
      alert(data.errorMsg)
      console.log(data);
    });
    return ;
  }

  //set model for request json
  setModel(data:any){
     this.insertCustomerRequest.address=data.address;
     this.insertCustomerRequest.addressId=data.addressId;
     this.insertCustomerRequest.createBy='nipphit';
     this.insertCustomerRequest.cusCode=data.cusCode;
     this.insertCustomerRequest.email=data.email;
     this.insertCustomerRequest.ibCode=data.ibCode;
     this.insertCustomerRequest.idCard=data.idCard;
     this.insertCustomerRequest.latestBill=data.latestBill;
     this.insertCustomerRequest.nickName=data.nickName;
     this.insertCustomerRequest.payTime=data.payTime;
     this.insertCustomerRequest.registerDate=data.registerDate;
     this.insertCustomerRequest.rname=data.rname;
     this.insertCustomerRequest.sentFile=data.sentFile;
     this.insertCustomerRequest.sname=data.sname;
     this.insertCustomerRequest.tel=data.tel;
     this.insertCustomerRequest.updateBy='nipphit';
     this.insertCustomerRequest.cusId=data.cusId;
   }
}
