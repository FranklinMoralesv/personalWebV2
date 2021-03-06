import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  myForm:FormGroup=this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    subject:['',[Validators.required]],
    message:['',[Validators.required]],
  });
  sectionIsInSight:boolean=false;
  formIsInSight:boolean=false;
  

  constructor(
    private fb:FormBuilder,
    private renderer:Renderer2) { }


  validateField(field:string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }
  isWriting(field:string):boolean{
    return this.myForm.controls[field].value!=='';
  }

  ///Emite una alerta para notificar que todavia no esta implementado el formulario
  sendMessage(){

    //TODO:Agregar funcionalidad  (nodemailer)  a esta caracteristica 

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
    }else{

      alert('Sorry, this backend feature is not configured yet, please contact me manually at franklinmoralesv@gmail.com or + 58-424-899-2140');
      console.log('Sorry, this backend feature is not configured yet, please contact me manually at franklinmoralesv@gmail.com or + 58-424-899-2140')
    }

  }

  ///Inicia el mapa con las cordenadas especificadas
  initMap(){
    
    //mapboxgl as any porque tiene un error en el tipado
    (mapboxgl as any).accessToken = environment.mapboxToken;
    var map = new mapboxgl.Map({
    container: 'map',
    center:[-64.68298232692187,10.148975277462975],
    zoom:6,
    style: 'mapbox://styles/frankmv/ckvjsug6k239d16o3v6uphcsy'
    });

    //creando el marcador y configruando  estilos
    const element=this.renderer.createElement('div');

    this.renderer.setStyle(element,'width','220px');
    this.renderer.setStyle(element,'height','220px');
    this.renderer.setStyle(element,'backgroundSize','100%');
    this.renderer.setStyle(element,'backgroundImage','url(../../../assets/images/markervssvg.svg)');
    this.renderer.setStyle(element,'backgroundRepeat','no-repeat');
  

   
    // Add markers to the map.
    new mapboxgl.Marker(element).
    setLngLat([-64.68298232692187,10.148975277462975])
    .addTo(map);
  }
  
  onDisplaySection(){
    this.sectionIsInSight=true;
  }
  onDisplayForm(){
    this.formIsInSight=true;
  }

  ///Carga el estilo del mapa de forma perezoza
  lazyloadStyle(){
    //creando el elemento
    const link=this.renderer.createElement('link');
    this.renderer.setAttribute(link,'href','https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css');
    this.renderer.setAttribute(link,'rel','stylesheet');
  
    
    const head=document.querySelector('head');

    //agregando al head
    this.renderer.appendChild(head,link);
  }

  ngOnInit(): void {
    this.lazyloadStyle();
  }
  }


