import AutoBinding from './utils/decorators';
import Validatable from './utils/interfaces';
import validate from './utils/utils';

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
console.log(
  Math.trunc(Math.random() * 100000).toString() + Date.now().toString()
);
