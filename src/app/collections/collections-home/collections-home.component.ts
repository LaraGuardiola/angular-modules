import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'James', age: 24, job: 'Designer', homeless: false},
    { name: 'John', age: 35, job: 'Software Evangelist', homeless: false},
    { name: 'Steve', age: 80, job: 'Veteran', homeless: false},
    { name: 'Jhonny', age: 29, job: 'Developer', homeless: true},
  ]
  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'},
    { key: 'homeless', label: 'Homeless'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  //data and headers will be passed down to the child

}
