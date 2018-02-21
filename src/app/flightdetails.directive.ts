import {Directive, ElementRef, Input, OnInit, Renderer} from '@angular/core';
import {Renderer3} from '@angular/core/src/render3/renderer';

@Directive({
  selector: '[appFlightdetails]'
})
export class FlightdetailsDirective implements OnInit{
  @Input('color') color: string;
  @Input('val') val: string;
  constructor(private el: ElementRef, private renderer: Renderer) {
  }
  ngOnInit() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.color);
    this.renderer.setElementStyle(this.el.nativeElement, 'height', this.val + 'px');

  }
}
