import { Component, OnInit, ElementRef, ViewChild, Renderer2, HostListener } from '@angular/core';
import { Project } from 'src/app/shared/interfaces/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  

  projects:Project[]=[
    {
      title:'HeroesApp',
      subtitle:'Personal Project',
      description:'CRUD using REST API hosted on Firebase. By applying path protection, and lazyload to the modules, only auntenticated users can access the paths.',
      urlImage:['../../../assets/images/gallery/heroes0.png','../../../assets/images/gallery/heroes1.png','../../../assets/images/gallery/heroes2.png','../../../assets/images/gallery/heroes3.webp'],
      urlImageWebp:['../../../assets/images/gallery/heroes0.webp','../../../assets/images/gallery/heroes1.webp','../../../assets/images/gallery/heroes2.webp','../../../assets/images/gallery/heroes3.webp'],
      languagesT:['Angular','TypeScript','Material Design','Firebase'],
      git:'https://github.com/FranklinMoralesv/HeroesApp',
      page:'https://heroes-appmv.netlify.app/'
    },
    {
      title:'BarbershopApp',
      subtitle:'Personal Project',
      description:'SPA in which you can choose from multiple services, calculate the price and finally schedule an appointment.',
      urlImage:['../../../assets/images/gallery/barbershop0.png','../../../assets/images/gallery/barbershop1.png','../../../assets/images/gallery/barbershop2.png'],
      urlImageWebp:['../../../assets/images/gallery/barbershop0.webp','../../../assets/images/gallery/barbershop1.webp','../../../assets/images/gallery/barbershop2.webp'],
      languagesT:['HTML','SASS','JavaScript','Gulp'],
      git:'https://github.com/FranklinMoralesv/BarbershopApp',
      page:'https://barbershop-mv.netlify.app/'
    },
    {
      title:'Rock & EDM Festival',
      subtitle:'Personal Project',
      description:'Informative website about the event ROCK & EDM Festival, contains an image gallery and information related to the festival.',
      urlImage:['../../../assets/images/gallery/festival0.png','../../../assets/images/gallery/festival1.png','../../../assets/images/gallery/festival2.png'],
      urlImageWebp:['../../../assets/images/gallery/festival0.webp','../../../assets/images/gallery/festival1.webp','../../../assets/images/gallery/festival2.webp'],
      languagesT:['HTML','SASS','JavaScript','Gulp'],
      git:'https://github.com/FranklinMoralesv/festival',
      page:'https://rock-edm-festivalmv.netlify.app/'
    },
    
    {
      title:'BlogDeCafé',
      subtitle:'Personal Project',
      description:'Static blog, but very well styled, fully responsive, with multiple entries and navigation between pages using only HTML and CSS.',
      urlImage:['../../../assets/images/gallery/cafe0.png','../../../assets/images/gallery/cafe1.png','../../../assets/images/gallery/cafe2.png'],
      urlImageWebp:['../../../assets/images/gallery/cafe0.webp','../../../assets/images/gallery/cafe1.webp','../../../assets/images/gallery/cafe2.webp'],
      languagesT:['HTML','CSS'],
      git:'https://github.com/FranklinMoralesv/blogDeCafe',
      page:'https://blogcafemv.netlify.app/'
    },

    {
      title:'GifsApp',
      subtitle:'Personal Project',
      description:'Application to search Gif images, consuming the Giphy API.',
      urlImage:['../../../assets/images/gallery/gifs0.png','../../../assets/images/gallery/gifs1.png'],
      urlImageWebp:['../../../assets/images/gallery/gifs0.webp','../../../assets/images/gallery/gifs1.webp'],
      languagesT:['Angular','Bootstrap','SASS','Giphy API'],
      git:'https://github.com/FranklinMoralesv/GifsApp',
      page:'https://gifs-appmv.netlify.app/'
    },
    {
      title:'Franklinmv',
      subtitle:'Personal Project',
      description:'Personal website-portfolio.Built with Angular where I show the projects I have done.',
      urlImage:['../../../assets/images/gallery/personalWeb0.png','../../../assets/images/gallery/personalWeb0.png'],
      urlImageWebp:['../../../assets/images/gallery/personalWeb0.webp','../../../assets/images/gallery/personalWeb0.png'],
      languagesT:['Angular','SASS','TypeScript','Mapbox'],
      git:'https://github.com/FranklinMoralesv/personalWebV2',
      page:'https://franklinmv.netlify.app/'
    },
    {
      title:'MapsApp',
      subtitle:'Personal Project',
      description:'A simple application with the Mapbox API (similar to GoogleMaps).',
      urlImage:['../../../assets/images/gallery/maps0.png','../../../assets/images/gallery/maps1.png','../../../assets/images/gallery/maps2.png'],
      urlImageWebp:['../../../assets/images/gallery/maps0.webp','../../../assets/images/gallery/maps1.webp','../../../assets/images/gallery/maps2.webp'],
      languagesT:['Angular','Bootstrap','Mapbox API'],
      git:'https://github.com/FranklinMoralesv/MapsApp',
      page:'https://maps-appmv.netlify.app/'
    },
    {
      title:'Cyber Highway',
      subtitle:'Sleepy Donkey Games',
      description:'Arcade style video game, with a global leaderboard, where players can share their best scores on their favorite social networks, it has a store to unlock power-ups with in-game currency or by watching advertising. Published in the Play Store',
      urlImage:['../../../assets/images/gallery/cyber0.png','../../../assets/images/gallery/cyber1.png'],
      urlImageWebp:['../../../assets/images/gallery/cyber0.webp','../../../assets/images/gallery/cyber1.webp'],
      languagesT:['Unity','C#','Photon'],
      git:'#',
      page:'https://play.google.com/store/apps/details?id=com.SleepyDonkeyGames.CyberHighway'

    }
  ];
  //proyectos visibles segun el  dispositivo, movil pequeno 4, pc 8
  projectsToShow:number=4;
  innerWidth:number=window.innerWidth;

  overlayProject:Project={
    title:'',
      subtitle:'',
      description:'',
      urlImage:[''],
      urlImageWebp:[''],
      languagesT:[],
      git:'#',
      page:'#'
  };
  showOverlay:boolean=false;
  currentIndexImage:number=0;

  //Variable para saber cuando la imagen del overlay esta cargada
  isImageLoaded:boolean=false;
  sectionIsInSight:boolean=false;

  @ViewChild('gallery') galleryElement!:ElementRef;
   
  
  @HostListener('window:resize')  onResize() {
      
    this.innerWidth = window.innerWidth;
    this.updateProjectsToShow();
    this.initialAnimation();

    }

  
  
  onDisplay(){
    this.sectionIsInSight=true;
  }

  ///Cuantos proyectos se debe de mostrar segun el width
  updateProjectsToShow(){
    if(this.innerWidth<640){
      this.projectsToShow=4;
    }else{
      this.projectsToShow=this.projects.length;
    }
  }

  ///Metodo que se ejecuta al hacer click en el boton siguiente de la galeria
  nextImage(){

    const maxIndex:number=this.overlayProject.urlImage!.length-1

    if(this.currentIndexImage< maxIndex){
      this.currentIndexImage++;
    }else{
      this.currentIndexImage=0;
    }
    
    this.isImageLoaded=false;
  }
///Metodo que se ejecuta al hacer click en el boton atras de la galeria
  previousImage(){
    const maxIndex:number=this.overlayProject.urlImage!.length-1
    
    this.isImageLoaded=false;
    if(this.currentIndexImage> 0){
      this.currentIndexImage--;
    }else{
      this.currentIndexImage=maxIndex;
    }
  }

  
  closeOverlay(){
    this.showOverlay=false;
    this.currentIndexImage=0;
  }

  showProject(project:Project){
    
    this.overlayProject=project;
    this.showOverlay=true;
    //Regresa a su estado inicial
    this.isImageLoaded=false;
  
  }

  onImageLoad(){
    this.isImageLoaded=true;
  }

  ///Se ejecuta al hacer click en el boton mostrar mas/menos
  showMore(){
    if(this.projectsToShow==4){
      this.projectsToShow=this.projects.length;
      // this.updateProjectsToShow();
      
      //Esperar un poco a que se generen los elementos en el dom
      setTimeout(() => {
        this.initialAnimation();
      
      }, 200);
      // this.initialAnimation();
    }else{
      this.projectsToShow=4;
    }
   
  }


  constructor(private renderer:Renderer2) {}

  ///Agrega las clases deseadas cuando la galeria esta a la vista
   initialAnimation(){
    
    const liElements=[...this.galleryElement.nativeElement.children];

    let animationDelay:number=1;
    liElements.forEach((liElement)=>{
    
    //calculando el delay
    const delayClass:string=`delay-${animationDelay*200}`;
    animationDelay++;

    this.renderer.addClass(liElement,'animate__fadeInUpBig');
    this.renderer.addClass(liElement,'visibility-visible');
    this.renderer.addClass(liElement,delayClass);

    //Quitando la clase cuando se termine la animacion escuchando cuando el evento de la animacion termine
      let unlisten=this.renderer.listen(liElement,'animationend',()=>{
      this.renderer.removeClass(liElement,'animate__fadeInUpBig');
      this.renderer.addClass(liElement,'delay-0');
      //Deja de escuchar el evento 
      unlisten();
      }); 

    });
  }

  ///Cuantos proyectos se mostraran al inicio
  setInitialProjectsToShow(){
    this.innerWidth = window.innerWidth;
    if( this.innerWidth<640){
      this.projectsToShow=4;
    }else{
      this.projectsToShow=this.projects.length;
    }
  }
  ngOnInit(): void {
    this.setInitialProjectsToShow();
  }

  

}
