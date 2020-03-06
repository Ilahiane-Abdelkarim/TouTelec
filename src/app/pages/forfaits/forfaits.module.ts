import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForfaitsRoutingModule } from './forfaits-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ArchiveComponent } from './archive/archive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [ListComponent, NewComponent, ArchiveComponent],
  imports: [
    CommonModule,
    ForfaitsRoutingModule,
    NgbModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],

})
export class ForfaitsModule { }
