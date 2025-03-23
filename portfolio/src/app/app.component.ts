import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMobileView = false;
  isCollapsed = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenWidth();
  }

  ngOnInit() {
    this.checkScreenWidth();
    
    // Escuchar cambios en el estado de la sidebar
    window.addEventListener('storage', (event) => {
      if (event.key === 'sidebarCollapsed') {
        this.updateSidebarClass();
      }
    });
    
    this.updateSidebarClass();
  }

  checkScreenWidth() {
    this.isMobileView = window.innerWidth <= 768;
  }
  
  updateSidebarClass() {
    const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    
    if (isCollapsed) {
      document.querySelector('.app-container')?.classList.add('sidebar-collapsed');
    } else {
      document.querySelector('.app-container')?.classList.remove('sidebar-collapsed');
    }
  }
}
