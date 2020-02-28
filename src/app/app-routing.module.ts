import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';


const routes: Routes = [
  { 
    path: '', redirectTo: 'home',pathMatch:'full',canActivate: [OktaAuthGuard]
  },
  { 
    path: 'auth', loadChildren:'./auth/auth.module#AuthModule'
  },
  { path: '', component: LayoutComponent , children:[
    { 
      path: '', loadChildren:'./pages/pages.module#PagesModule',canActivate: [OktaAuthGuard]
    }
  ]},
   { path: 'implicit/callback', component: OktaCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
