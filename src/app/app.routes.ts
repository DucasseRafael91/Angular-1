import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { TrainingComponent } from './components/trainings/trainings';
import { CartComponent } from './components/cart/cart'
import { CustomerComponent } from './components/customer/customer';
import { NotFoundComponent } from './components/notfound/notfound';
import { OrderComponent } from './components/order/order';
import { authAdminGuard } from './components/authAdminGuard/adminGuard';
import { CreateTraining } from './components/create-training/create-training';  
import { AccessDenied } from './components/access-denied/access-denied';
import { AdminComponent } from './components/admin/admin';
import { EditTrainingComponent } from './components/edit-training/edit-training';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'trainings', component: TrainingComponent },
    { path: 'cart', component: CartComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'admin', component: AdminComponent, canActivate: [authAdminGuard] },
    { path: 'create', component: CreateTraining, canActivate: [authAdminGuard] },
    { path: 'edit/:id', component: EditTrainingComponent, canActivate: [authAdminGuard] },
    { path: 'order', component: OrderComponent },
    { path: 'denied', component: AccessDenied },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' },
];

