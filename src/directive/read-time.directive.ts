import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appReadTime]',
})
export class ReadTimeDirective implements OnInit {
  @Input() appReadTime = 0;
  @Output() appReadTimeChange = new EventEmitter<number>();
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.calculateReadTime();
  }

  calculateReadTime() {
    const text = <string>this.elementRef.nativeElement.innerText;
    //avg reading 200wpm
    const minutes = Math.round(text.split(' ').length / 200); // grossomodo il numero di parole /200
    setTimeout(() => {
      this.appReadTimeChange.emit(minutes);
    }, 0);
  }
}
