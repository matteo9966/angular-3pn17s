import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollto]',
})
export class ScrolltoDirective {
  @Input() element: HTMLElement = null;
  @HostListener('click')
  gotoPar() {
    if (!this.element) {
      return;
    }
    this.element.scrollIntoView({ behavior: 'smooth' });
  }

  constructor() {}
}
