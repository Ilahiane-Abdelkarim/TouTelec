import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  // { 
  //   path: '', redirectTo: 'auth/login',pathMatch:'full'
  // },
  { 
    path: 'auth', loadChildren:'./auth/auth.module#AuthModule'
  },
  { path: '', component: LayoutComponent , children:[
    { 
      path: '', loadChildren:'./pages/pages.module#PagesModule'
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
