import { TaskModel } from "@/App/components/Task/models/TaskModel";
import { TasksListModel } from "@/App/components/TasksList/models/TasksListModel";
import { BoardModel } from "@pages/BoardPage/models/BoardModel";

const boardIds = ["1231231", "23423423", "567567567"];
const listIds = ["qweqweqw", "asdasdasd", "zxczxczxc"];

export const boards: BoardModel[] = boardIds.map(
  (boardId: string, index: number) =>
    new BoardModel({
      id: boardId,
      title: `Test board ${index}`,
      lists: listIds.map(
        (listId: string, listIndex: number) =>
          new TasksListModel({
            id: listId,
            title: `Test tasks list ${listIndex}`,
            boardId,
            tasks: [
              new TaskModel({ listId, boardId, content: "Test task 1" }),
              new TaskModel({ listId, boardId, content: "Test task 2" }),
              new TaskModel({ listId, boardId, content: "Test task 3" }),
            ],
          })
      ),
    })
);
