import { Component, ViewEncapsulation } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  color: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'bi-code-square',
      title: 'Desarrollo Web',
      subtitle: 'Aplicaciones web modernas y escalables',
      description: 'Creamos soluciones web completas desde cero, utilizando las últimas tecnologías y mejores prácticas de la industria.',
      features: [
        'Aplicaciones web responsivas y rápidas',
        'Paneles de administración personalizados',
        'Integración con APIs y servicios externos',
        'E-commerce con pasarelas de pago'
      ],
      technologies: ['Angular', 'React', 'Vue.js', 'Laravel', 'Ruby on Rails', 'Node.js'],
      color: '#00bcd4'
    },
    {
      icon: 'bi-database',
      title: 'Extracción de Datos',
      subtitle: 'Web scraping y automatización',
      description: 'Automatizamos la extracción y procesamiento de información web para decisiones estratégicas basadas en datos.',
      features: [
        'Extracción automática de datos web',
        'Monitoreo de competencia y precios',
        'Procesamiento y limpieza de información',
        'Dashboards personalizados de visualización'
      ],
      technologies: ['Python', 'Selenium', 'BeautifulSoup', 'PostgreSQL', 'Ruby'],
      color: '#9c27b0'
    },
    {
      icon: 'bi-laptop',
      title: 'Software de Escritorio',
      subtitle: 'Aplicaciones multiplataforma',
      description: 'Desarrollamos aplicaciones de escritorio potentes y eficientes para gestión empresarial y procesos específicos.',
      features: [
        'Sistemas de punto de venta (POS)',
        'Gestión de inventario y facturación',
        'Aplicaciones para Windows, Mac y Linux',
        'Sincronización con base de datos en la nube'
      ],
      technologies: ['Electron.js', 'Angular', 'PostgreSQL', 'SQLite'],
      color: '#ff5722'
    },
    {
      icon: 'bi-robot',
      title: 'Inteligencia Artificial',
      subtitle: 'Automatización inteligente',
      description: 'Implementamos soluciones de IA para automatizar procesos complejos y mejorar la toma de decisiones empresariales.',
      features: [
        'Reconocimiento y procesamiento de imágenes',
        'Extracción OCR de documentos',
        'Chatbots y asistentes conversacionales',
        'Análisis predictivo de datos'
      ],
      technologies: ['OpenAI', 'Google Gemini', 'TensorFlow', 'Vision AI'],
      color: '#00e676'
    },
    {
      icon: 'bi-server',
      title: 'Servidores & DevOps',
      subtitle: 'Infraestructura y mantenimiento',
      description: 'Gestionamos tu infraestructura tecnológica para garantizar disponibilidad, seguridad y rendimiento óptimo.',
      features: [
        'Administración de servidores Linux',
        'Configuración de máquinas virtuales',
        'Despliegue continuo (CI/CD)',
        'Monitoreo y optimización de recursos'
      ],
      technologies: ['Linux', 'Docker', 'AWS', 'Google Cloud', 'Nginx'],
      color: '#f44336'
    },
    {
      icon: 'bi-diagram-3',
      title: 'Gestión de Proyectos',
      subtitle: 'Metodologías ágiles',
      description: 'Coordinamos y gestionamos proyectos de desarrollo con metodologías ágiles para entregas puntuales y de calidad.',
      features: [
        'Scrum y Kanban',
        'Planificación de sprints',
        'Seguimiento de avances',
        'Documentación técnica completa'
      ],
      technologies: ['Jira', 'Git', 'GitHub', 'GitLab', 'Slack'],
      color: '#2979ff'
    }
  ];
}
