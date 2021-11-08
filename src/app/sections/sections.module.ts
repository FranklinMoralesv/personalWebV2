import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeroComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  
  ],
  exports:[
  HeroComponent,
  ProjectsComponent,
  AboutComponent,
  ContactComponent,
 
  ]
})
export class SectionsModule { }
