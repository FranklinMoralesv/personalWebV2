import { AfterViewInit, Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit,AfterViewInit {


  @ViewChild('word1') word1!:ElementRef;
  @ViewChild('word2') word2!:ElementRef;
  @ViewChild('word3') word3!:ElementRef;
  @ViewChild('word4') word4!:ElementRef;
 

  constructor(private renderer:Renderer2) { }
 

  animationDelay:number=1;

 
  splitWord(word:string):string[]{
    const characters:string[]=word.split('');
    return characters;
  }


  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.initialAnimation();
  
  }
  

  //Agrega las animaciones iniciales
  initialAnimation(){
   
    let animationDelay:number=1;
    const classesToAdd:string[]=['animate__bounceIn'];

    //cantidad de caracteres
   
    const words=[
      [...this.word1.nativeElement.children],
      [...this.word2.nativeElement.children],
      [...this.word3.nativeElement.children],
      [...this.word4.nativeElement.children]
    ]


    words.forEach((word)=>{
      this.addClass(word,classesToAdd);
    });

    

  }

  ///Agrega las clases necesarias y una vez terminada las remueve
  addClass(characters:Element[],classesToAdd:string[]){
    characters.forEach(element => {
      //calculando el delay
      const delayClass:string=`delay-${this.animationDelay*100}`;
      this.animationDelay++;

      //agregando la clase de delay
      this.renderer.addClass(element,delayClass);
      //Quitando la clase cuando se termine la animacion
      let unlisten=this.renderer.listen(element,'animationend',()=>{
        this.renderer.removeClass(element,'animate__bounceIn');
        this.renderer.addClass(element,'delay-0');
        
        
        //Deja de escuchar
        unlisten();
        
        
      });

      classesToAdd.forEach((classToAdd)=>{
        this.renderer.addClass(element,classToAdd);
      });
     
    });
  }



}
