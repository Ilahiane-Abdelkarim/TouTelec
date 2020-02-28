import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';



const routes: Routes = [
  { 
    path: 'home',
    component: DashboardComponent,
    canActivate: [OktaAuthGuard]
   },
   { 
    path: 'forfaits',
    loadChildren:'./forfaits/forfaits.module#ForfaitsModule',
    canActivate: [OktaAuthGuard]
   },
   { 
    path: 'contracts',
    loadChildren:'./contracts/contracts.module#ContractsModule',
    canActivate: [OktaAuthGuard]
   },
   { 
    path: 'clients',
    loadChildren:'./clients/clients.module#ClientsModule',
    canActivate: [OktaAuthGuard]
   },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
