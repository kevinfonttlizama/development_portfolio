import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  prefersReducedMotion = false;

  constructor(private renderer: Renderer2) {}
  
  ngOnInit() {
    // Detectar preferencia de reducción de movimiento
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Aplicar clase para optimización
    if (this.prefersReducedMotion || this.isLowEndDevice()) {
      this.renderer.addClass(document.body, 'reduce-animations');
    }
    
    // Optimizar renderizado de partículas
    this.optimizeParticles();
  }
  
  isLowEndDevice() {
    // Detectar dispositivos de bajo rendimiento de manera segura
    const deviceMemory = 'deviceMemory' in navigator ? 
      (navigator as any).deviceMemory : 8;
      
    const hardwareConcurrency = navigator.hardwareConcurrency || 8;
    
    return (
      deviceMemory < 4 || 
      hardwareConcurrency < 4 ||
      window.innerWidth < 768
    );
  }
  
  optimizeParticles() {
    // Reducir el número de partículas en dispositivos de bajo rendimiento
    if (this.isLowEndDevice()) {
      const container = document.querySelector('.particles-container');
      if (container) {
        const particles = container.querySelectorAll('.particle');
        // Mantener solo algunas partículas en dispositivos de bajo rendimiento
        particles.forEach((particle, index) => {
          if (index >= 6) {
            this.renderer.setStyle(particle, 'display', 'none');
          }
        });
      }
    }
  }
}
