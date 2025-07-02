import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import React from "react";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);
  const [isDeletingTask, setIsDeletingTask] = React.useState(false);

  function prepareTask() {
    setTasks([...tasks, { 
      id: crypto.randomUUID(),
      title: "",
      state: TaskState.CREATING,
    }]);
  }

  async function updateTask(task: Task) {
    setIsUpdatingTask(true);

    await delay(1000);

    setTasks(
      tasks.map((t) =>
        t.id === task.id
          ? {
              ...task,
              state: TaskState.CREATED,              
            }
          : t
      )
    );

    setIsUpdatingTask(false);
  }

  async function deleteTask(task: Task) {
    setIsDeletingTask(true);
    await delay(1000);
    setTasks(tasks.filter((t) => t.id !== task.id));
    setIsDeletingTask(false);
  }

  return {
    prepareTask,
    updateTask,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  };
}