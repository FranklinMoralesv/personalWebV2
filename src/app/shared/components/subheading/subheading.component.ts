import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subheading',
  templateUrl: './subheading.component.html',
  styleUrls: ['./subheading.component.scss']
})
export class SubheadingComponent implements OnInit {

  @Input () subheading:string='Subheading empty';
  constructor() { }

  caracteres:string[]=[];

  stringToCharacters(){

    this.caracteres=this.subheading.split('');

    // console.log(this.caracteres);
    
  }
  
  ngOnInit(): void {
    this.stringToCharacters()
  }

}
