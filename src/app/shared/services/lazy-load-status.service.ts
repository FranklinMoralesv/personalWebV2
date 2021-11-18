import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadStatusService {

  projectsComponentIsLoaded:boolean=false;
  aboutComponentIsLoaded:boolean=false;
  contactComponentIsLoaded:boolean=false;

 
  constructor() { }

  async loadProjectsSection(){

    const {ProjectsComponent}=await import('../../sections/projects/projects.component');
  
    return ProjectsComponent;
  }

  async loadAboutSection(){

    const {AboutComponent}=await import('../../sections/about/about.component');
  
    return AboutComponent;
  }

  async loadContactSection(){

    const {ContactComponent}=await import('../../sections/contact/contact.component');
  
    return ContactComponent;
  }

  
}
