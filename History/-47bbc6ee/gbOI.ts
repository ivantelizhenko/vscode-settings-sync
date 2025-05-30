import { Component } from './Component';
import { Project } from './Project';

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
  private project: Project;

  get constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;
    console.log(project.id);

    this.renderContent();
  }

  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent =
      this.project.people.toString() + ' Persons assigned';
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}
