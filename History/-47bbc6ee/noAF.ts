import { Component } from './Component';
import { Project } from './Project';

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
  private project: Project;

  constructor(hostId: string, id: string) {
    super('single-project', hostId, true, id);
  }
}
