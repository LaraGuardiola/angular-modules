import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  /*ngOnDestroy(): void {
    document.body.remove()
  }*/

  //child to parent comunication, this method will be called from the parent component Modal

  onCloseClick(): void {
    this.close.emit();
  }

}
//FIRST LIFECYCLE HOOK ngOnInit()
//on initialization ModalComponent gets appended to the body so the position absolute of the modal centers itself