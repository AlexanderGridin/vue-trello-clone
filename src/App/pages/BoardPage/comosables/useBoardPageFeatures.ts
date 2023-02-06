import type { TasksListModel } from "@app/entities/TasksList/TasksListModel";
import type { TaskModel } from "@app/entities/Task/TaskModel";
import { useBoardPageState } from "@pages/BoardPage/state/useBoardPageState";
import type { BoardModel } from "@app/entities/Board/BoardModel";

export const useBoardPageFeatures = (board: BoardModel) => {
  const state = useBoardPageState();

  const addList = (list: TasksListModel) => {
    state.addList({
      ...list,
      boardId: board.id,
    });
  };

  const addTaskInList = (task: TaskModel, list: TasksListModel) => {
    state.addTask({
      ...task,
      listId: list.id,
      boardId: board.id,
    });
  };

  const togglePinList = (list: TasksListModel) => {
    list.isPinned
      ? state.unpinList({ ...list, isPinned: false })
      : state.pinList({ ...list, isPinned: true });
  };

  return { addList, addTaskInList, togglePinList };
};
