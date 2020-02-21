import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {


  public checkboxGroupForm: FormGroup;

  model;

  constructor(private formBuilder: FormBuilder) { }
  text = "Oui";
  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      national: true,
      international: true,
      orange: true,
    });
  }

}
