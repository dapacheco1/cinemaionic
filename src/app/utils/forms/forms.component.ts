import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {

  //ui variables
  @Input() fieldName:string='';
  
  constructor() { }

  ngOnInit() {}

}
