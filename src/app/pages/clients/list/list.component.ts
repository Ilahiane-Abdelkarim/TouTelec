import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listClients: any[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = 0;

  constructor() { }

  ngOnInit() {
    this.collectionSize = this.listClients.length;
  }


}
