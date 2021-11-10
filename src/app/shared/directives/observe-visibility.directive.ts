import { Directive, EventEmitter, Input, Output, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[observeVisibility]'
})
export class ObserveVisibilityDirective implements OnInit{

  constructor(private el:ElementRef,private renderer:Renderer2) {
    
    }

  @Input() threshold:number = 0.05;
  @Input() justOnce:boolean=true;
  @Input() classesToAdd:string[]=[];

  @Output() onDisplay= new EventEmitter<boolean>();
  
  // @Output() onDisplay= new EventEmitter<ElementRef>();

  
 
  observer: IntersectionObserver | undefined;
  
   createObserver() {
    
    //configurando las opciones
    let options = {
     // root:document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: this.threshold
    }
    //Crando el observer

    let myObserver = new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting){
        //Si enta aqui significa que esta visible
      //  console.log('Elemento visible',this.el);

        // this.onDisplay.emit(this.el);
       
        //agregando clases
        this.classesToAdd.forEach((classToAdd)=>{
          this.renderer.addClass(this.el.nativeElement,classToAdd);
        });

        this.onDisplay.emit(true);

        if(this.justOnce){
          myObserver.disconnect();
        }
      }else{
       // console.log('No visible');
      }
    }, options);

    //Asigando el elemento a observar

    myObserver.observe(this.el.nativeElement);

   }//create obsever




   ngOnInit(){
     this.createObserver();
   }
  
  }





  


