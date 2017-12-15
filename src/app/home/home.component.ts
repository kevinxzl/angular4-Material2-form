import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person = new Person();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert('Thanks for submitting! Data: ' + JSON.stringify(this.person));
  }

}
