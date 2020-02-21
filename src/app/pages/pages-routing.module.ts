import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  { 
    path: 'home',
    component: DashboardComponent
   },
   { 
    path: 'forfaits',
    loadChildren:'./forfaits/forfaits.module#ForfaitsModule'
   },
   { 
    path: 'contracts',
    loadChildren:'./contracts/contracts.module#ContractsModule'
   },
   { 
    path: 'clients',
    loadChildren:'./clients/clients.module#ClientsModule'
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
