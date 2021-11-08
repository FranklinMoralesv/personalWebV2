import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hover]'
})
export class HoverClassDirective {
  @Input () toogleHoverClass:string[]=[''];
  


  constructor( private elementRef:ElementRef,private renderer:Renderer2) {}


  @HostListener('mouseenter') onMouseEnter(){

    this.toogleHoverClass.forEach((classToAdd)=>{
      this.renderer.addClass(this.elementRef.nativeElement,classToAdd);
    });
  
  
  }
  @HostListener('animationend') onAnimationEnd() {

   
    //TODO:Refactorizar la forma como se remueve la animacion inicial
    //Removiendo la animacion inicial
    this.renderer.removeClass(this.elementRef.nativeElement,'animate__bounceIn');
    // this.renderer.addClass(this.elementRef.nativeElement,'delay-0');
    this.renderer.addClass(this.elementRef.nativeElement,'delay-0')

    this.toogleHoverClass.forEach((classToRemove)=>{
      this.renderer.removeClass(this.elementRef.nativeElement,classToRemove);
    });
    
  
    
  }
  

  
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.elementRef.nativeElement.classList.remove(this.onHoverClass);
  // }


}
