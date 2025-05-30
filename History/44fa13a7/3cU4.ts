import { ProjectStatus } from '../utils/anyTypes';
import { Component } from './Component';
import { Project } from './Project';
import { ProjectItem } from './ProjectItem';

import { projectState } from './States';

export class ProjectList extends Component<HTMLDivElement, HTMLElement> {
  assignedProjects: Project[];

  constructor(private type: 'active' | 'finished') {
    super('projects-list', 'app', false, `${type}-projects`);
    this.assignedProjects = [];

    projectState.addListener((projects: Project[]) => {
      const relevantProject = projects.filter(project => {
        if (type === 'active') return project.status === ProjectStatus.Active;
        if (type === 'finished')
          return project.status === ProjectStatus.Finished;
      });

      this.assignedProjects = relevantProject;
      this.renderProjects();
    });

    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-project-list`
    )! as HTMLUListElement;

    listEl.innerHTML = '';
    this.assignedProjects.map(projectItem => {
      const prj = new ProjectItem(projectItem);
    });
  }

  protected renderContent() {
    const listId = `${this.type}-project-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      `${this.type} projects`.toUpperCase();
  }
}
