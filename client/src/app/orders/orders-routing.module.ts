import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { OrderDetailedComponent } from '../order-detailed/order-detailed.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  {
    path: ':id',
    component: OrderDetailedComponent,
    data: { breadcrumb: { alias: 'OrderDetailed' } },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
