import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollDownComponent } from './components/scroll-down/scroll-down.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    ScrollDownComponent,
    SidebarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
   ScrollDownComponent,
   SidebarComponent,
   MenuComponent
  ]
})
export class SharedModule { }
