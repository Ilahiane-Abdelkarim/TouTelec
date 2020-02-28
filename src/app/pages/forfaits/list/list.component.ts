import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { FormGroup } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  //for update
  form: FormGroup;

  modalCallback: () => void;
  //
  listForfaits: any[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = this.listForfaits.length;

  // get forfait(): Country[] {
  //   return listForfaits
  //     .map((country, i) => ({id: i + 1, ...country}))
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }
  id_forfait: any;
  constructor(private server: ServerService) { }

  ngOnInit() {
    this.getForfait();
  }

  private getForfait() {
    this.server.get('forfait').then((response: any) => {
      console.log('Response', response);
      this.listForfaits = response;

    });
  }

  // getIdForfait(index){
  //   this.id_forfait = index;
  //   console.log('id de forfait: ',this.id_forfait);
  // }
  getIdForfait(index) {
    this.id_forfait = index;
    console.log('id = ',this.id_forfait)
  }
  private archiverForfait(index) {
    this.getIdForfait(index)
    this.server.updateEvent(this.id_forfait)
    .then((response: any) =>this.getForfait())
  }

}
