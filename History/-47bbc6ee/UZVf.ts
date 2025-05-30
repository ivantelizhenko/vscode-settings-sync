import { Component } from './Component';
import { Project } from './Project';

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
  private project: Project;

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, true, project.id);
    this.project = project;

    this.renderContent();
  }

  renderContent() {}
}
