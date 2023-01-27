import { TaskModel } from "@/App/components/Task/models/TaskModel";
import { TasksListModel } from "@/App/components/TasksList/models/TasksListModel";
import type { BoardModel } from "@pages/BoardPage/models/BoardModel";
import { generateId } from "@shared/utils/generateId";

export const BOARD: BoardModel = {
  id: generateId(),
  title: "Test Board",
  lists: [
    new TasksListModel({
      title: "Todo",
      tasks: [
        new TaskModel({ listId: "2", content: "Test task 1" }),
        new TaskModel({ listId: "2", content: "Test task 2" }),
        new TaskModel({ listId: "2", content: "Test task 3" }),
      ],
    }),
    new TasksListModel({ title: "In Progress" }),
    new TasksListModel({ title: "Done" }),
  ],
};
