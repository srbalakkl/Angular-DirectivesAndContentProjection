import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: 'appCustomElement'
})
export class CustomElementDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    (this.element.nativeElement as HTMLElement).style.backgroundColor = "blue";
  }

}
