import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isSidebarActive:boolean=false;
  isBackgroundAudioActive:boolean=false;


  @ViewChild('sidebar') sidebarElement!:ElementRef;
  @ViewChild('backgroundAudio') backgroundAudioElement!:ElementRef;
  constructor(private renderer:Renderer2) { }

  toggleSidebar(){

    this.isSidebarActive=!this.isSidebarActive;

    if(this.isSidebarActive){
      this.renderer.addClass(this.sidebarElement.nativeElement,'animate__slideInRight');
      this.renderer.addClass(this.sidebarElement.nativeElement,'show-sidebar');

      this.renderer.removeClass(this.sidebarElement.nativeElement,'animate__slideOutRight');
    }else{
      this.renderer.addClass(this.sidebarElement.nativeElement,'animate__slideOutRight');
      
    }
  
  }

  toggleAudio(){
    this.isBackgroundAudioActive=!this.isBackgroundAudioActive;

    if(this.isBackgroundAudioActive){
      this.backgroundAudioElement.nativeElement.play();
    }else{
      this.backgroundAudioElement.nativeElement.pause();
    }
  }

  ngOnInit(): void {
    
  }

}
