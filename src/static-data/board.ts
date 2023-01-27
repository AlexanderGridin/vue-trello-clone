import type { BoardModel } from "@pages/BoardPage/models/BoardModel";
import { generateId } from "@shared/utils/generateId";

export const BOARD: BoardModel = {
  id: generateId(),
  title: "Test Board",
  lists: [
    {
      id: generateId(),
      title: "TODO:",
      tasks: [],
    },
    {
      id: generateId(),
      title: "DONE:",
      tasks: [],
    },
  ],
};
