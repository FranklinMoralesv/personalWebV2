import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private renderer:Renderer2) { }

  animationDelay:number=0;

 
  splitWord(word:string):string[]{
    const characters:string[]=word.split('');
    return characters;
  }

  removeClass(classesToRemove:string[]){
    classesToRemove.forEach((classToRemove)=>{
      this.renderer.removeClass('','')
    });
  }

  initialAnimationDelay(index:number):string{

    const delayClass:string=`delay-${index}`;

    return ' '+delayClass;
  }

  initialClass(){

  }
  ngOnInit(): void {
    this.initialClass();
  }

}
