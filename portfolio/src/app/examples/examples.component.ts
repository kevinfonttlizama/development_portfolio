import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {
  activeProject: string = '';
  

  projects = [
    {
      id: 'project1',
      title: 'Desarrollo Web Moderno',
      description: 'Creamos Experiencias modernas y responsivas',
      image: '../../assets/Captura de pantalla 2024-08-24 123601.png',
      link: '#'
    },
    {
      id: 'project2',
      title: 'E-Commerce Platform',
      description: 'A scalable and user-friendly e-commerce solution.',
      image: '../../assets/Captura de pantalla 2024-08-24 123643.png',
      link: '#'
    },
    {
      id: 'project3',
      title: 'Generacion de contenido',
      description: 'Soluciones de contenido para redes sociales',
      image: '../../assets/IMG_20240816_150546-Photoroom.webp',
      link: '#'
    },
    {
      id: 'project4',
      title: 'Generacion de contenido',
      description: 'Soluciones de contenido para redes sociales',
      image: '../../assets/IMG_20240817_135456-Photoroom-Photoroom.webp',
      link: '#'
    },
    {
      id: 'project5',
      title: 'Google Merchant Center',
      description: 'Vende mas con las ultimas tecnologias de marketing',
      image: '../../assets/ejemplo merchant center-Photoroom.webp',
      link: '#'
    },
    {
      id: 'project6',
      title: 'Edicion de imagenes y Productos',
      description: 'Productos sin fondo/con marca',
      image: '../../assets/410a png-Photoroom.png',
      link: '#'
    },
    {
      id: 'project7',
      title: 'Portafolios web',
      description: 'Ejemplo de estilo Neon',
      image: '../../assets/neon-template.webp',
      link: 'https://plantilla-test-1.vercel.app/'
    },
    {
      id: 'project8',
      title: 'Portafolios web',
      description: 'Ejemplo neon acerca de, descripcion del profesional',
      image: '../../assets/neon_acerca_de.webp',
      link: 'https://plantilla-test-1.vercel.app/'
    }
  ];
  

  toggleProjectDetails(projectId: string) {
    this.activeProject = this.activeProject === projectId ? '' : projectId;
  }
}
