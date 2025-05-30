import { Component } from './Component';

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
  constructor(private hostId: string) {
    super('');
  }
}
