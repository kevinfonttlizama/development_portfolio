import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isMobileView = false;

  @HostListener('window:resize')
  onResize() {
    this.checkScreenWidth();
  }

  ngOnInit() {
    this.checkScreenWidth();
    window.addEventListener('storage', (event) => {
      if (event.key === 'sidebarCollapsed') {
        this.updateSidebarClass();
      }
    });
    this.updateSidebarClass();
  }

  ngOnDestroy(): void {
    window.removeEventListener('toggle-sidebar', () => {});
  }

  toggleSidebarFromFab(): void {
    window.dispatchEvent(new CustomEvent('toggle-sidebar'));
  }

  checkScreenWidth() {
    this.isMobileView = window.innerWidth <= 768;
  }

  updateSidebarClass() {
    const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    document.body.classList.toggle('sidebar-collapsed', isCollapsed);
  }
}
