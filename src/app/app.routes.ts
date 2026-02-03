import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { TrainingComponent } from './components/trainings/trainings';
import { CartComponent } from './components/cart/cart'
import { CustomerComponent } from './components/customer/customer';
import { NotFoundComponent } from './components/notfound/notfound';
import { OrderComponent } from './components/order/order';
import { authAdminGuard } from './components/authAdminGuard/adminGuard';

export const routes: Routes = [
    {path : 'login',component : LoginComponent},
    {path : 'trainings',component : TrainingComponent},
    {path : 'cart',component : CartComponent},
    {path : 'customer',component : CustomerComponent},
    {path : 'admin',component : CustomerComponent, canActivate: [authAdminGuard]},
    {path : 'order',component : OrderComponent},
    {path : '', redirectTo: 'login', pathMatch: 'full'},
    {path : '404',component : NotFoundComponent},
    {path : '**',redirectTo : '/404'},
];
