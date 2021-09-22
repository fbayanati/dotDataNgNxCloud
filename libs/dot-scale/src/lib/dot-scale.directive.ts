import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dotDataScale]',
})
export class DotScaleDirective {
  constructor(public element: ElementRef) {}

  @HostListener('mouseover')
  public ddMouseOver(): void {
    this.element.nativeElement.style.transition = 'all .5s';
    this.element.nativeElement.style.transform = 'scale(1.5)';
  }

  @HostListener('mouseout')
  public ddMouseOut(): void {
    this.element.nativeElement.style.transform = 'scale(1.0)';
  }
}
