import type { TasksListModel } from "@/App/models/TasksList";

export interface BoardModel {
  id: string;
  title: string;
  lists: TasksListModel[];
}
