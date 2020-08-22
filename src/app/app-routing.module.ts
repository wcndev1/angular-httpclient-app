import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { InsertcustomerComponent } from './insertcustomer/insertcustomer.component';

const routes: Routes = [
  {path:"getCustomer",component:CustomerComponent},
  {path:"insertCustomer",component:InsertcustomerComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
