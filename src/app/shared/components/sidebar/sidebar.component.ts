import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarStatus:boolean=true;
  constructor() { }

  showSidebar(){
    this.sidebarStatus=!this.sidebarStatus;
  }
  ngOnInit(): void {
  }

}
