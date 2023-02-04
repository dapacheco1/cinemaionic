import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-error',
  templateUrl: './forms-error.page.html',
  styleUrls: ['./forms-error.page.scss'],
})
export class FormsErrorPage implements OnInit {

  //ui variables
  @Input() fieldName:string='';
  
  constructor() { }

  ngOnInit() {}


}
