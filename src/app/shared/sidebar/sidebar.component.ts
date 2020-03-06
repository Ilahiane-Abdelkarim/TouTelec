import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }


  forfait_stat:boolean = false;
  contracts_stat:boolean = false;
  ngOnInit() {
  }

  onClick_forfait(){
    this.forfait_stat = !this.forfait_stat
  }

  onClick_contracts(){
    this.contracts_stat = !this.contracts_stat
  }

}
