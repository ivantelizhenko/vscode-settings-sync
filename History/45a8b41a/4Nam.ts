import { Listener, ProjectStatus } from '../utils/anyTypes';
import { Project } from './Project';

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) return this.instance;

    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.trunc(Math.random() * 100000).toString() + Date.now().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    this.listeners.forEach(fn => fn(this.projects.slice()));
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    this.projects.find(project => project.id === projectId);
  }
}

export const projectState = ProjectState.getInstance();
