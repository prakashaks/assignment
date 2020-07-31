import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() fromParent;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    // console.log(this.fromParent);
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
