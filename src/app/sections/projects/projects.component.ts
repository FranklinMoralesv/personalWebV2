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
      urlImage:'../../../assets/images/capturaHeroesApp.png',
      urlImageWebp:'../../../assets/images/webp/capturaHeroesApp.webp',
      languagesT:['Angular','TypeScript','Material Design','Firebase'],
      git:'https://github.com/FranklinMoralesv/HeroesApp',
      page:'https://heroes-appmv.netlify.app/'
    },
    {
      title:'BarbershopApp',
      subtitle:'Personal Project',
      description:'SPA En la cual se puede elegir entre multiples servicios, calcular el precio y finalmente agendar una cita.',
      urlImage:'../../../assets/images/capturaBarbershop.png',
      urlImageWebp:'../../../assets/images/webp/capturaBarbershopApp.webp',
      languagesT:['HTML','SASS','JavaScript','Gulp'],
      git:'https://github.com/FranklinMoralesv/BarbershopApp',
      page:'https://barbershop-mv.netlify.app/'
    },
    {
      title:'Rock & EDM Festival',
      subtitle:'Personal Project',
      description:'Pagina web informativa, sobre el evento ROCK & EDM Festival, contiene una galeria de imagenes e informacion relacionada al festival.',
      urlImage:'../../../assets/images/capturaRockAndEdmFestival.png',
      urlImageWebp:'../../../assets/images/webp/capturaRockAndEdmFestival.webp',
      languagesT:['HTML','SASS','JavaScript','Gulp'],
      git:'https://github.com/FranklinMoralesv/festival',
      page:'https://rock-edm-festivalmv.netlify.app/'
    },
    
    {
      title:'BlogDeCafé',
      subtitle:'Personal Project',
      description:'Blog estático, pero muy bien estilizado, totalmente responsive, con multiples entradas y navegacion entre las paginas usando solo HTML y CSS.',
      urlImage:'../../../assets/images/blogCaptura.png',
      urlImageWebp:'../../../assets/images/webp/capturaBlogDeCafe.webp',
      languagesT:['HTML','CSS'],
      git:'https://github.com/FranklinMoralesv/blogDeCafe',
      page:'https://blogcafemv.netlify.app/'
    },

    {
      title:'GifsApp',
      subtitle:'Personal Project',
      description:'Aplicación  para buscar imagenes Gif, consumiendo la API de Giphy.',
      urlImage:'../../../assets/images/capturaGifsApp.png',
      urlImageWebp:'../../../assets/images/webp/capturaGifsApp.webp',
      languagesT:['Angular','Bootstrap','SASS','Giphy API'],
      git:'https://github.com/FranklinMoralesv/GifsApp',
      page:'https://gifs-appmv.netlify.app/'
    },
    {
      title:'Franklinmv',
      subtitle:'Personal Project',
      description:'Pagina web personal-portafolio. Construida con Angular y PrimeNG en la cual muestro los proyectos que he realizado.',
      urlImage:'../../../assets/images/capturaPersonalWebV1.png',
      urlImageWebp:'../../../assets/images/webp/capturaGifsApp.webp',
      languagesT:['Angular','Css','TypeScript','PrimeNG'],
      git:'https://github.com/FranklinMoralesv/personalWeb',
      page:'https://franklinmv.netlify.app/'
    },
    {
      title:'MapsApp',
      subtitle:'Personal Project',
      description:'Una Aplicación sencilla con la API de Mapbox (similar a GoogleMaps).',
      urlImage:'../../../assets/images/capturaMapsApp.png',
      urlImageWebp:'../../../assets/images/webp/capturaMapsApp.webp',
      languagesT:['Angular','Bootstrap','Mapbox API'],
      git:'https://github.com/FranklinMoralesv/MapsApp',
      page:'https://maps-appmv.netlify.app/'
    },
    {
      title:'Cyber Highway',
      subtitle:'Sleepy Donkey Games',
      description:'Videojuego de estilo arcade, con una tabla de clasificación mundial, donde los jugadores pueden compartir sus mejores puntuaciones en sus redes sociales favoritas, cuenta con una tienda para desbloquear potenciadores con la moneda del juego o viendo publicidad. Publicado en la Play Store',
      urlImage:'../../../assets/images/CyberHigwayControl.png',
      urlImageWebp:'../../../assets/images//webp/CyberHigwayControl.webp',
      languagesT:['Unity','C#','Photon'],
      git:'#',
      page:'https://play.google.com/store/apps/details?id=com.SleepyDonkeyGames.CyberHighway'

    }
  ];
  projectsToShow:number=0;

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

  onHoverEnter(event:any){
    //TODO:agregar tipado
    const element=event.target.firstElementChild;
    element.classList.add("show");

  }

  onHoverOut(event:any){
    //mouseEvent
    const element=event.target.firstElementChild;
    element.classList.remove("show");


  }

  constructor() {

    this.initialSetup();
   
    this.showProjects();

   }

  ngOnInit(): void {
    // this.showProjects();
  }

  

}
