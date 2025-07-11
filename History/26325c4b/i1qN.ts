import AutoBinding from '../utils/decorators';
import Validatable from '../utils/anyTypes';
import validate from '../utils/utils';
import { ProjectElement } from './ProjectCore';
import { projectState } from './ProjectState';

export class ProjectInput extends ProjectElement {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super('project-input');

    this.element.id = 'user-input';

    this.titleInputElement = this.element.querySelector(
      '#title'
    )! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      '#description'
    )! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      '#people'
    )! as HTMLInputElement;

    this.configure();
    this.attach('afterbegin');
  }

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  private gatherUserInput(): [string, string, number] {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    // Here i can implement error handler
    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    )
      throw new Error('Invalid input, please try again!');

    return [enteredTitle, enteredDescription, +enteredPeople];
  }

  @AutoBinding
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();

    if (!Array.isArray(userInput))
      throw new Error('Unexpected value! Please try again!');

    const [title, description, people] = userInput;
    projectState.addProject(title, description, people);
    this.clearInputs();
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }
}
