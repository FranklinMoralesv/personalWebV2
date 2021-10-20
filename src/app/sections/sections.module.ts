import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './hero/hero.component';




@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
  HeroComponent
  ]
})
export class SectionsModule { }
