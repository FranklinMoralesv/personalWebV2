import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hover]'
})
export class HoverClassDirective {
  @Input () onHoverClass:string='';

  constructor( public elementRef:ElementRef) {console.log('elemnto',elementRef) }

  @HostListener('mouseenter') onMouseEnter(){
    this.elementRef.nativeElement.classList.add(this.onHoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.onHoverClass);
  }

}
