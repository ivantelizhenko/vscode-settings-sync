import AutoBinding from './decorators';
import Validatable from './interfaces';
import validate from './utils';

class ProjectElement {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;

  constructor(private templateElementId: string) {
    this.templateElement = document.getElementById(
      templateElementId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as HTMLElement;
  }

  protected attach(whereAdd: InsertPosition) {
    this.hostElement.insertAdjacentElement(whereAdd, this.element);
  }
}

class ProjectList extends ProjectElement {
  constructor(private type: 'active' | 'finished') {
    super('project-list');

    this.element.id = `${type}-projects`;

    this.attach('beforeend');
    this.renderContent();
  }

  private renderContent() {
    const listId = `${this.type}-project-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      `${this.type} projects`.toUpperCase();
  }
}

class ProjectList extends ProjectElement {
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
    this.attach();
  }
}

// class ProjectList {
//   templateElement: HTMLTemplateElement;
//   hostElement: HTMLDivElement;
//   element: HTMLElement;

//   constructor(private type: 'active' | 'finished') {
//     this.templateElement = document.getElementById(
//       'project-list'
//     )! as HTMLTemplateElement;
//     this.hostElement = document.getElementById('app')! as HTMLDivElement;

//     const importedNode = document.importNode(
//       this.templateElement.content,
//       true
//     );

//     this.element = importedNode.firstElementChild as HTMLElement;
//     this.element.id = `${type}-projects`;

//     this.attach();
//     this.renderContent();
//   }

//   private attach() {
//     this.hostElement.insertAdjacentElement('beforeend', this.element);
//   }
// }

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      'project-input'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as HTMLFormElement;
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
    this.attach();
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
    console.log(title, description, people);
    this.clearInputs();
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
