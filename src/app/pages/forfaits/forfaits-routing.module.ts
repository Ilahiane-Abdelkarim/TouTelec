import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ArchiveComponent } from './archive/archive.component';


const routes: Routes = [
  { 
    path: 'list',
    component: ListComponent
   },
   { 
    path: 'new',
    component: NewComponent
   },
   { 
    path: 'archive',
    component: ArchiveComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForfaitsRoutingModule { }
