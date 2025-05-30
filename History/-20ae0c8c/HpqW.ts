import { ProjectInput } from './classes/ProjectInput';
import { ProjectList } from './classes/ProjectList';
import _ from 'lodash';

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');

console.log(_.chunk([1, 2, 3, 4, 5, 6], 1));
