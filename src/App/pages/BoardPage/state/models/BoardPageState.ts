import type { Ref } from "vue";
import type { BoardModel } from "@app/entities/Board/BoardModel";

export type BoardPageState = Ref<{
  boardsCache: Record<string, BoardModel>;
  board: BoardModel;
}>;
