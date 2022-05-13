import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen: boolean = false;
  items: any = [
    {title: 'Why is the air invisible?', content: 'Nobody knows, just ask google'},
    {title: 'What does the fox say?', content: 'wiwiwiwiwiwiwiwiwiwi'},
    {title: 'is AI gonna leave us jobless?', content: 'oh boy nobody knows'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.modalOpen = !this.modalOpen;
  }
}
