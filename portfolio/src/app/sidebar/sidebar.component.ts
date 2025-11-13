import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  isMobileOpen = false;
  activeSection: 'inicio' | 'servicios' | 'contacto' = 'inicio';

  private observer?: IntersectionObserver;
  private toggleHandler = () => this.toggleMobileSidebar();

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const savedCollapse = localStorage.getItem('sidebarCollapsed');
    if (savedCollapse) {
      this.isCollapsed = savedCollapse === 'true';
    }
    this.isCollapsed = window.innerWidth > 768 ? false : this.isCollapsed;
    window.addEventListener('toggle-sidebar', this.toggleHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('toggle-sidebar', this.toggleHandler);
    if (this.isMobileOpen) {
      this.renderer.removeClass(document.body, 'mobile-menu-open');
    }
  }

  toggleMobileSidebar(): void {
    this.isMobileOpen = !this.isMobileOpen;

    if (this.isMobileOpen) {
      this.renderer.addClass(document.body, 'mobile-menu-open');
    } else {
      this.renderer.removeClass(document.body, 'mobile-menu-open');
    }
  }

  onNavLinkClick(section: 'inicio' | 'servicios' | 'contacto'): void {
    this.activeSection = section;

    if (this.isMobileOpen) {
      this.toggleMobileSidebar();
    }
  }
}