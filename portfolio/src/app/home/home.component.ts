import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  isDarkMode = false;

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  
  projects = [
    {
      title: 'cat-black.title',
      description: 'cat-black.description',
      image: '../../assets/cat-black-logo-.png',
      link: 'https://aire-acondicionado-cat-black.cl/'
    },
    {
      title: 'portfolio.title',
      description: 'portfolio.description',
      image: '../../assets/arthas_dk.jpg',
      link: 'https://github.com/kevinfonttlizama/kevinfonttlizama.github.io'
    },
    {
      title: 'python.title',
      description: 'python.description',
      image: '../../assets/python_gif.gif',
      link: 'https://github.com/kevinfonttlizama/python-tests'
    },
    {
      title: 'javascript.title',
      description: 'javascript.description',
      image: '../../assets/js_giff.gif',
      link: 'https://github.com/kevinfonttlizama/Javascript-tests'
    },
    {
      title: 'github.title',
      description: 'github.description',
      image: '../../assets/github_gif.gif',
      link: 'https://github.com/kevinfonttlizama?tab=repositories'
    }
  ];
}


