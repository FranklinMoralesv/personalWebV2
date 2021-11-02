import { Component, OnInit, ElementRef } from '@angular/core';
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
      description:'CRUD usando REST API alojada en Firebase. Aplicando proteccíon de rutas, y lazyload a los modulos, solo usuarios auntenticados pueden acceder a las rutas.',
      urlImage:['../../../assets/images/gallery/heroes0.png','../../../assets/images/gallery/heroes1.png','../../../assets/images/heroes2.webp'],
      urlImageWebp:['../../../assets/images/gallery/heroes0.webp','../../../assets/images/gallery/heroes1.webp','../../../assets/images/heroes2.webp'],
      languagesT:['Angular','TypeScript','Material Design','Firebase'],
      git:'https://github.com/FranklinMoralesv/HeroesApp',
      page:'https://heroes-appmv.netlify.app/'
    },
    {
      title:'BarbershopApp',
      subtitle:'Personal Project',
      description:'SPA En la cual se puede elegir entre multiples servicios, calcular el precio y finalmente agendar una cita.',
      urlImage:['../../../assets/images/gallery/barbershop0.png','../../../assets/images/gallery/barbershop1.png','../../../assets/images/gallery/barbershop2.png'],
      urlImageWebp:['../../../assets/images/gallery/barbershop0.webp','../../../assets/images/gallery/barbershop1.webp','../../../assets/images/gallery/barbershop2.webp'],
      languagesT:['HTML','SASS','JavaScript','Gulp'],
      git:'https://github.com/FranklinMoralesv/BarbershopApp',
      page:'https://barbershop-mv.netlify.app/'
    },
    {
      title:'Rock & EDM Festival',
      subtitle:'Personal Project',
      description:'Pagina web informativa, sobre el evento ROCK & EDM Festival, contiene una galeria de imagenes e informacion relacionada al festival.',
      urlImage:['../../../assets/images/gallery/festival0.png','../../../assets/images/gallery/festival1.png','../../../assets/images/gallery/festival2.png'],
      urlImageWebp:['../../../assets/images/gallery/festival0.webp','../../../assets/images/gallery/festival1.webp','../../../assets/images/gallery/festival2.webp'],
      languagesT:['HTML','SASS','JavaScript','Gulp'],
      git:'https://github.com/FranklinMoralesv/festival',
      page:'https://rock-edm-festivalmv.netlify.app/'
    },
    
    {
      title:'BlogDeCafé',
      subtitle:'Personal Project',
      description:'Blog estático, pero muy bien estilizado, totalmente responsive, con multiples entradas y navegacion entre las paginas usando solo HTML y CSS.',
      urlImage:['../../../assets/images/gallery/cafe0.png','../../../assets/images/gallery/cafe1.png','../../../assets/images/gallery/cafe2.png'],
      urlImageWebp:['../../../assets/images/gallery/cafe0.webp','../../../assets/images/gallery/cafe1.webp','../../../assets/images/gallery/cafe2.webp'],
      languagesT:['HTML','CSS'],
      git:'https://github.com/FranklinMoralesv/blogDeCafe',
      page:'https://blogcafemv.netlify.app/'
    },

    {
      title:'GifsApp',
      subtitle:'Personal Project',
      description:'Aplicación  para buscar imagenes Gif, consumiendo la API de Giphy.',
      urlImage:['../../../assets/images/gallery/gifs0.png','../../../assets/images/gallery/gifs1.png'],
      urlImageWebp:['../../../assets/images/gallery/gifs0.webp','../../../assets/images/gallery/gifs1.webp'],
      languagesT:['Angular','Bootstrap','SASS','Giphy API'],
      git:'https://github.com/FranklinMoralesv/GifsApp',
      page:'https://gifs-appmv.netlify.app/'
    },
    {
      title:'Franklinmv',
      subtitle:'Personal Project',
      description:'Pagina web personal-portafolio. Construida con Angular y PrimeNG en la cual muestro los proyectos que he realizado.',
      urlImage:['../../../assets/images/gallery/personalWeb0.png','../../../assets/images/gallery/maps0.png'],
      urlImageWebp:['../../../assets/images/gallery/personalWeb0.webp','../../../assets/images/gallery/maps0.webp'],
      languagesT:['Angular','Css','TypeScript','PrimeNG'],
      git:'https://github.com/FranklinMoralesv/personalWeb',
      page:'https://franklinmv.netlify.app/'
    },
    {
      title:'MapsApp',
      subtitle:'Personal Project',
      description:'Una Aplicación sencilla con la API de Mapbox (similar a GoogleMaps).',
      urlImage:['../../../assets/images/gallery/maps0.png','../../../assets/images/gallery/maps1.png','../../../assets/images/gallery/maps2.png'],
      urlImageWebp:['../../../assets/images/gallery/maps0.webp','../../../assets/images/gallery/maps1.webp','../../../assets/images/gallery/maps2.webp'],
      languagesT:['Angular','Bootstrap','Mapbox API'],
      git:'https://github.com/FranklinMoralesv/MapsApp',
      page:'https://maps-appmv.netlify.app/'
    },
    {
      title:'Cyber Highway',
      subtitle:'Sleepy Donkey Games',
      description:'Videojuego de estilo arcade, con una tabla de clasificación mundial, donde los jugadores pueden compartir sus mejores puntuaciones en sus redes sociales favoritas, cuenta con una tienda para desbloquear potenciadores con la moneda del juego o viendo publicidad. Publicado en la Play Store',
      urlImage:['../../../assets/images/gallery/cyber0.png','../../../assets/images/gallery/cyber1.png'],
      urlImageWebp:['../../../assets/images/gallery/cyber0.webp','../../../assets/images/gallery/cyber1.webp'],
      languagesT:['Unity','C#','Photon'],
      git:'#',
      page:'https://play.google.com/store/apps/details?id=com.SleepyDonkeyGames.CyberHighway'

    }
  ];
  projectsToShow:number=0;

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

  isImageLoaded:boolean=false;
 

  showProjects(){
    const mediaQuery:MediaQueryList=window.matchMedia("(min-width:640px)");
  
    mediaQuery.addEventListener('change',breakpoint=>{
      
      if(breakpoint.matches){
       this.projectsToShow=this.projects.length;//cantidad de proyectos a mostrar
        
      }else{
        this.projectsToShow=4;
        
      }
    });
  
  }

  initialSetup(){
    if(window.window.innerWidth<640){
      this.projectsToShow=4;
    }else{
      this.projectsToShow=this.projects.length;
    }
  }

  nextImage(){

 
    const maxIndex:number=this.overlayProject.urlImage!.length-1

    if(this.currentIndexImage< maxIndex){
      this.currentIndexImage++;
    }else{
      this.currentIndexImage=0;
    }
    
    this.isImageLoaded=false;

    
  }

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
    this.isImageLoaded=false;


  
  }

  onImageLoad(){
    this.isImageLoaded=true;
  }

  

  constructor() {

    this.initialSetup();
    this.showProjects();

   }

  ngOnInit(): void {
    
  }

  

}
