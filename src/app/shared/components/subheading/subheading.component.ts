import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewChild,} from '@angular/core';

@Component({
  selector: 'app-subheading',
  templateUrl: './subheading.component.html',
  styleUrls: ['./subheading.component.scss'],

})
export class SubheadingComponent implements OnInit, OnChanges,AfterViewInit {

  @Input () subheading:string='Subheading empty';
  @Input () isH3:boolean=false;
  @ViewChild ('subheading') subheadingElement!:ElementRef;
 
  
  isOnDisplay:boolean=false;
  animationDelay:number=1;
  constructor(private renderer:Renderer2) { }
 

  characters:string[]=[];

  ///Divide la cadena que se recibe para aplicarle la animacion a cada caracter por separado
  stringToCharacters(){
    this.characters=this.subheading.split('');
  }
  

  ///Metodo que se ejecuta una sola vez cuando el componente esta a la vista
   elementStatus(){
    this.isOnDisplay=true;
    // console.log('esta ondisplay',this.isOnDisplay);
  }



  ngOnInit(): void {
    this.stringToCharacters()
  }
  ngOnChanges(): void {
    // this.stringToCharacters()
  }
  ngAfterViewInit(): void {
    // this.initialAnimation();
    this.stringToCharacters()
  }
  

  initialAnimation(){
    // console.log('Initial Animation comenzo!');
    const characteres=[...this.subheadingElement.nativeElement.children];

    characteres.forEach((character)=>{
    
    //calculando el delay
    const delayClass:string=`delay-${this.animationDelay*100}`;
    this.animationDelay++;

    this.renderer.addClass(character,'animate__bounceIn');
    this.renderer.addClass(character,'visibility-visible');
    this.renderer.addClass(character,delayClass);

    //Quitando la clase cuando se termine la animacion escuchando cuando el evento de la animacion termine
      let unlisten=this.renderer.listen(character,'animationend',()=>{
      this.renderer.removeClass(character,'animate__bounceIn');
      this.renderer.addClass(character,'delay-0');
      //Deja de escuchar el evento 
      unlisten();
      }); 

    });
  }



}
