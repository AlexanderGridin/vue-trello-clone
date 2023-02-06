import { TasksListModel } from "@app/entities/TasksList/TasksListModel";
import { TaskModel } from "@app/entities/Task/TaskModel";
import { useBoardPageState } from "@pages/BoardPage/state/useBoardPageState";
import type { AddItemFormValue } from "@/App/components/AddItemForm/models/AddItemFormValue";
import type { BoardModel } from "@app/entities/Board/BoardModel";

export const useBoardPageFeatures = (board: BoardModel) => {
  const state = useBoardPageState();

  const addList = (entity: AddItemFormValue) => {
    state.addList(
      new TasksListModel({ title: entity.text, boardId: board.id })
    );
  };

  const addTaskInList = (list: TasksListModel, formValue: AddItemFormValue) => {
    state.addTask(
      new TaskModel({
        listId: list.id,
        boardId: board.id,
        content: formValue.text,
      })
    );
  };

  return { addList, addTaskInList };
};
