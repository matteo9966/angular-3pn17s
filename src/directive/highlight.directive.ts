import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges, OnInit, AfterViewInit {
  originalText = '';
  @Input() highlightText = '';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    this.originalText = this.elementRef.nativeElement.innerHTML;
    console.log('or:', this.originalText);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.highlightText.firstChange) {
      this.originalText = this.elementRef.nativeElement.innerText;
    } else {
      const { currentValue } = changes.highlightText;
      const regex = new RegExp(`(${currentValue})`, 'gi');
      const newText = this.originalText.replace(
        regex,
        `<span style='background-color:yellow'>$1</span>`
      );
      console.log(newText, currentValue, this.originalText);
      // this.elementRef.nativeElement.innerHTML = newText;
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        'innerText',
        newText
      );
    }
  }
}
