import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Iemp } from '../empDetails';
// import { emit } from 'cluster';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
@Input() empD:any;
@ViewChild('name') name:ElementRef;
@ViewChild('cname') cname:ElementRef;
@ViewChild('role') role:ElementRef;
@Output() saveDetails = new EventEmitter();
test:string="test";

  constructor() { }

  ngOnInit() {
this.name.nativeElement.value = this.empD.name;
this.cname.nativeElement.value = this.empD.companyName;
this.role.nativeElement.value = this.empD.role;
  }
  saveEmpDetails(){
    this.saveDetails.emit(this.empD);
  }
}
