import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

export default function TasksSummary() {
  const { tasksCount, tasksConcluded, isLoadingTasks } = useTasks();
  
  return (
    <>
      <div className="flex items-center gap-2">
        <Text className="!text-gray-300" variant="body-sm-bold">
          Tarefas criadas
        </Text>
        <Badge variant="secondary" loading={isLoadingTasks}>
          {tasksCount}
        </Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text className="!text-gray-300" variant="body-sm-bold">
          Concluídas
        </Text>
        <Badge variant="primary" loading={isLoadingTasks}>
          {tasksConcluded}
        </Badge>
      </div>
    </>
  );
}