import { TasksListModel } from "@/App/components/TasksList/models/TasksListModel";
import { TaskModel } from "@/App/components/Task/models/TaskModel";
import { useBoardPageState } from "@pages/BoardPage/state/useBoardPageState";
import type { AddItemFormValue } from "@/App/components/AddItem/components/AddItemForm/models/AddItemFormValue";
import type { BoardModel } from "../models/BoardModel";

export const useBoardPageActions = (board: BoardModel) => {
  const state = useBoardPageState();

  const addList = (entity: AddItemFormValue) => {
    state.addList(
      new TasksListModel({ title: entity.text, boardId: board.id })
    );
  };

  const addTaskInList = (list: TasksListModel, entity: AddItemFormValue) => {
    state.addTask(
      new TaskModel({
        listId: list.id,
        boardId: board.id,
        content: entity.text,
      })
    );
  };

  return { addList, addTaskInList };
};
