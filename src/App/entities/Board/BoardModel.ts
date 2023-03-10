import { generateId } from "@/shared/utils/generateId";
import type { TasksListModel } from "@app/entities/TasksList/TasksListModel";

interface BoardModelConfig {
  id?: string;
  title?: string;
  lists?: TasksListModel[];
}

export class BoardModel {
  public readonly id: string;

  public title: string;
  public lists: TasksListModel[];
  public pinnedLists: TasksListModel[] = [];
  public isFavorite = false;

  constructor({ id = generateId(), title = "", lists = [] }: BoardModelConfig) {
    this.id = id;
    this.title = title;
    this.lists = lists;
  }
}
