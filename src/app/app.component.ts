import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { LazyLoadStatusService } from './shared/services/lazy-load-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personalWebV2';

  constructor(
    private lazy:LazyLoadStatusService,
    private viewContainerRef:ViewContainerRef,
    private cfr:ComponentFactoryResolver) { }

    ///Metodo que gestiona el lazyload y la navegacion a las secciones
    goToSection(sectionId:string){
      
    switch(sectionId){
      case '#projects':{
        this.loadProjectsSection(sectionId);
        break;
      }
      case '#about':{
        this.loadProjectsSection('#projects');
        this.loadAboutSection(sectionId);
        break;
      }
      case '#contact':{
        this.loadProjectsSection('#projects');
        this.loadAboutSection('#about');
        this.loadContactSection(sectionId);
        break;
      }
      default:{
        console.warn(`Section ${sectionId} is missing`);
      }

    }
    
    this.scroll(sectionId);

    }
    ///Importa y navega hacia la seccion de proyectos
    loadProjectsSection(sectionId:string,isScrolling=false){
      if(!this.lazy.projectsComponentIsLoaded){
        //Importa el componente solo si no ha sido importado previamente
        this.lazy.loadProjectsSection()
        .then((lazyComponent)=>{
          this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(lazyComponent));
          this.lazy.projectsComponentIsLoaded=true;
         
          
          //Si no esta scrolleando significa que se invo el metodo desde el menu
          if(!isScrolling){
            setTimeout(() => {
              this.scroll(sectionId);
            }, 200);
          }
          
        });
      }
    }
    ///Navega hacia la seccion About
    loadAboutSection(sectionId:string){
      if(!this.lazy.aboutComponentIsLoaded){
        //Importa el componente solo si no ha sido importado previamente
        this.lazy.loadAboutSection()
        .then((lazyComponent)=>{
          this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(lazyComponent));
          this.lazy.aboutComponentIsLoaded=true;
          // console.log('About loaded');
        
          setTimeout(() => {
          
            this.scroll(sectionId);
          }, 200);
        
        });
      }
    }
    ///Navega hacia la seccion contact
    loadContactSection(sectionId:string){
      if(!this.lazy.contactComponentIsLoaded){
  
        this.lazy.loadContactSection()
        .then((lazyComponent)=>{
          this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(lazyComponent));
          this.lazy.contactComponentIsLoaded=true;
          // console.log('Contact loaded');
          setTimeout(() => {
            this.scroll(sectionId);
          }, 200);
        });
      }
    }

    ///Hace scroll hacia algun elemento segun un id
    scroll(id:string) {
      document.querySelector(`${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
   }
  



    

}
