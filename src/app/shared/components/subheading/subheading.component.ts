import { Component, Input, OnChanges, OnInit,} from '@angular/core';

@Component({
  selector: 'app-subheading',
  templateUrl: './subheading.component.html',
  styleUrls: ['./subheading.component.scss'],

})
export class SubheadingComponent implements OnInit, OnChanges {

  @Input () subheading:string='Subheading empty';
  @Input () ish2:boolean=true;
  @Input () textCenter:boolean=false;


  constructor() { }
  

  characters:string[]=[];

  stringToCharacters(){

    this.characters=this.subheading.split('');

   
    
  }
  
  ngOnInit(): void {
    this.stringToCharacters()
  }
  ngOnChanges(): void {
    this.stringToCharacters()
  }

}
