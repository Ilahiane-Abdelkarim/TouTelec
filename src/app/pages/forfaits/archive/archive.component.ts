import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  listForfaits: any[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;

  // get forfait(): Country[] {
  //   return listForfaits
  //     .map((country, i) => ({id: i + 1, ...country}))
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }

  constructor() { }

  ngOnInit() {
    this.collectionSize = this.listForfaits.length;
  }

}
