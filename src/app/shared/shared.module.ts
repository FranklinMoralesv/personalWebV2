import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollDownComponent } from './components/scroll-down/scroll-down.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubheadingComponent } from './components/subheading/subheading.component';
import { HoverClassDirective } from './directives/hover-class.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    ScrollDownComponent,
    SidebarComponent,
    MenuComponent,
    SubheadingComponent,
    HoverClassDirective,
    SpinnerComponent,
  
   
  ],
  imports: [
    CommonModule
  ],
  exports:[
   ScrollDownComponent,
   SidebarComponent,
   MenuComponent,
   SubheadingComponent,
   HoverClassDirective,
   SpinnerComponent
  
  ]
})
export class SharedModule { }
