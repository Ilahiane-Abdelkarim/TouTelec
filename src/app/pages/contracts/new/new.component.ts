import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  isDisabled = false;
  constructor() { }

  selectTypeF(event) {
    if(event.target.value == '6'){
     this.isDisabled = false;
    }else  this.isDisabled = true;
  }
  ngOnInit() {
  }

}
