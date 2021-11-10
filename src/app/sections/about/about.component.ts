import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  sectionIsInSight:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onDisplay(){
    this.sectionIsInSight=true;
  }
}
