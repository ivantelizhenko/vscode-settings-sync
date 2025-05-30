import { Draggable } from '../utils/anyTypes';
import { Component } from './Component';
import { Project } from './Project';

export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  get persons() {
    if (this.project.people === 1) return '1 person';
    if (this.project.people > 1) return `${this.project.people} persons`;
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;
    console.log(project.id);

    this.renderContent();
    this.configure();
  }

  dragStartHandler(event: DragEvent) {}
  dragEndHandler(event: DragEvent) {}

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler);
  }

  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}
