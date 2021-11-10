import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollDownComponent } from './components/scroll-down/scroll-down.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubheadingComponent } from './components/subheading/subheading.component';
import { HoverClassDirective } from './directives/hover-class.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LogoComponent } from './components/logo/logo.component';
import { ObserveVisibilityDirective } from './directives/observe-visibility.directive';



@NgModule({
  declarations: [
    ScrollDownComponent,
    SidebarComponent,
    MenuComponent,
    SubheadingComponent,
    HoverClassDirective,
    SpinnerComponent,
    LogoComponent,
    ObserveVisibilityDirective

  
   
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
   SpinnerComponent,
   LogoComponent,
   ObserveVisibilityDirective
  
  ]
})
export class SharedModule { }
