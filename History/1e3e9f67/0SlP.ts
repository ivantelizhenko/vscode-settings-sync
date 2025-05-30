export interface CourseGoalType {
  id: number;
  title: string;
  description: string;
}

export interface CourseGoalListType {
  goals: CourseGoalType[];
  onDeldete: (curId: number) => void;
}
