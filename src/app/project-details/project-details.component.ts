import { Component, OnInit, Input, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  // @Input() addProject:string;
  @ViewChildren('user') users: ElementRef;
  test: string="red";

  constructor(private eleRef: ElementRef) { }

  ngOnInit() {
  }

  add() {
    this.test = this.users.nativeElement.value;
  }

}
