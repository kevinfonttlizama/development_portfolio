import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  isMobileOpen = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Cargar estado guardado
    const savedCollapse = localStorage.getItem('sidebarCollapsed');
    if (savedCollapse) {
      this.isCollapsed = savedCollapse === 'true';
    }
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    localStorage.setItem('sidebarCollapsed', this.isCollapsed.toString());
  }

  toggleMobileSidebar(): void {
    this.isMobileOpen = !this.isMobileOpen;
    if (this.isMobileOpen) {
      this.renderer.addClass(document.body, 'mobile-menu-open');
    } else {
      this.renderer.removeClass(document.body, 'mobile-menu-open');
    }
  }
}