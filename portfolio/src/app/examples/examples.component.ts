import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {
  activeProject: string = '';

  toggleProjectDetails(project: string): void {
    this.activeProject = this.activeProject === project ? '' : project;
  }
}
