export const TASKS_KEY = "tasks";

export enum TaskState {
  CREATING = "creating",
  CREATED = "created"
}

export type Task = {
  id: string;
  title: string;
  concluded?: boolean;
  state?: TaskState;
};