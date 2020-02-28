import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

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
    this.server.get('forfaitArchiver').then((response: any) => {
      console.log('Response', response);
      this.listForfaits = response;
    });
  }

  getIdForfait(index) {
    this.id_forfait = index;
    console.log('id = ',this.id_forfait)
  }
  private restaurerForfait(index) {
    this.getIdForfait(index)
    this.server.updateForfaitArchiver(this.id_forfait)
    .then((response: any) =>this.getForfait())
  }

}
