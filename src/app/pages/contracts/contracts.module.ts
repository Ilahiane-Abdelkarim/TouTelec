import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ArchiveComponent } from './archive/archive.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ListComponent, NewComponent, ArchiveComponent],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class ContractsModule { }
