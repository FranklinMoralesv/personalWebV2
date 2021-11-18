import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() isSideMenu:boolean=false;


 

    @Output() onMenuClick= new EventEmitter<string>();


    goToSection(event:any){

    //Detener la navegacion, porque no se sabe si esta cargado el componente
    event.preventDefault();
    const sectionId=event.target.attributes[1].value;
    console.log('Click en :'+sectionId);
    this.onMenuClick.emit(sectionId);
    
  }




  ngOnInit(): void {
  }

}
