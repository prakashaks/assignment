import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { UserList, ActivePeriod } from '../model/user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userList = [];
  constructor(private commonService: CommonService, private modalService: NgbModal) { }

  ngOnInit() {
    this.commonService.getUser().subscribe(
      (res: UserList) => {
        this.userList = res.members;
      }
    );
  }

  openModal(activePeriods: ActivePeriod) {
    const modalRef = this.modalService.open(PopupComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg'
        // keyboard: false,
        // backdrop: 'static'
      });

    modalRef.componentInstance.fromParent = activePeriods;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }
}
