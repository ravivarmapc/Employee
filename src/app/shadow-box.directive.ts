import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appShadowBox],[appShadowX],[appShadowY],[appShadowBlur]'
})
export class ShadowBoxDirective implements OnInit {

  @Input() appShadowBox: string;
  @Input() appShadowX: string;
  @Input() appShadowY: string;
  @Input() appShadowBlur: string;


  constructor(private ele:ElementRef,private render:Renderer2) { }

  ngOnInit() {
    let shadowStr = `${ this.appShadowX } ${ this.appShadowY } ${ this.appShadowBlur } ${ this.appShadowBox }`;
    this.render.setStyle(this.ele.nativeElement,'box-shadow',shadowStr);

  }

}
