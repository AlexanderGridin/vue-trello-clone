import type { Ref } from "vue";
import type { BoardModel } from "@pages/BoardPage/models/BoardModel";

export type BoardPageState = Ref<{
  boardsCache: Record<string, BoardModel>;
  board: BoardModel;
}>;
