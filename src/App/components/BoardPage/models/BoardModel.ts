import type { TasksListModel } from "@app/components/TasksList/models/TasksListModel";

export interface BoardModel {
  id: string;
  title: string;
  lists: TasksListModel[];
}
