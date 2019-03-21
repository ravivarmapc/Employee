import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.scss']
})
export class ProductChildComponent implements OnInit {
  @Input() data:string;
  constructor() { }

  ngOnInit() {
  }

}
