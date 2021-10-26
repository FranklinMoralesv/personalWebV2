import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    HeroComponent,
    ProjectsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
  HeroComponent,
  ProjectsComponent,
  AboutComponent
  ]
})
export class SectionsModule { }
