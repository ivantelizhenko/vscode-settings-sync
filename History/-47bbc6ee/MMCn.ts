import { Component } from './Component';

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
  constructor(hostId: string, id: string) {
    super('single-project', hostId, true, id);
  }
}
