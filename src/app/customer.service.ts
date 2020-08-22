import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


// export interface ICustomer {
//   transectionId: string;
//   errorCode: string;
//   errorMsg: string;
//   cusId: string;
//   cusCode: string;
//   nickName: string;
//   idCard: string;
//   address: string;
//   addressId: string;
//   tel: string;
//   email: string;
//   latestBill: string;
//   payTime: string;
//   ibCode: string;
//   sentFile: string;
//   registerDate: string;
//   createDate: string;
//   createBy: string;
//   updateDate: string;
//   updateBy: string;
//   rname: string;
//   sname: string;
// }

export class Customer{
    public transectionId: string;
    public errorCode: string;
    public errorMsg: string;
    public cusId: string;
    public cusCode: string;
    public nickName: string;
    public idCard: string;
    public address: string;
    public addressId: string;
    public tel: string;
    public email: string;
    public latestBill: string;
    public payTime: string;
    public ibCode: string;
    public sentFile: string;
    public registerDate: string;
    public createDate: string;
    public createBy: string;
    public updateDate: string;
    public updateBy: string;
    public rname: string;
    public sname: string;
}



type GetCustomerResponse = HttpResponse<Customer>;
type EntityArrayResponseType = HttpResponse<Customer[]>;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: Customer;
  public resourceUrl = 'http://genio-springboot.herokuapp.com/Genio/GenioManageInfo';

  constructor(protected http: HttpClient) {}

  findByCustId(id:any): Observable<GetCustomerResponse> {
    return this.http.get<GetCustomerResponse>(this.resourceUrl + '/getCustomerInfoByCustID/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  


  createCustomer(data:any): Observable<any> {
    return this.http.post<any>(`${this.resourceUrl}/insertCustomerInfo/`, JSON.stringify(data), this.httpOptions); 
  } 

  updateCustomer(data:any): Observable<boolean> {
    console.log(JSON.stringify(data));
    return this.http.post<boolean>(this.resourceUrl + '/updateCustomerInfo', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } 
  



  // Error handling
  errorHandl(error) {
    console.log('Error');
    console.log(error);
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
