import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

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
