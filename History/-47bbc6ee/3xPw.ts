import { Component } from './Component';

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
  constructor(hostId: string) {
    super(hostId);
  }
}
