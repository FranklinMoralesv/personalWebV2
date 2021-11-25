import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { LazyLoadStatusService } from 'src/app/shared/services/lazy-load-status.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  sectionIsInSight:boolean=false;
  constructor( private lazy:LazyLoadStatusService,
    private viewContainerRef:ViewContainerRef,
    private cfr:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onDisplay(){
    this.sectionIsInSight=true;
  }

   //Carga perezozamente el componente
   loadContactSection(sectionId:string='#contact'){
    if(!this.lazy.contactComponentIsLoaded){

      this.lazy.loadContactSection()
      .then((lazyComponent)=>{
        this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(lazyComponent));
        this.lazy.contactComponentIsLoaded=true;
        // console.log('Cargo contact desde visivility');
      });
    }
  }
}
