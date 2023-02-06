import type { Ref } from "vue";
import type { BoardModel } from "@app/entities/Board/BoardModel";

export type BoardsPageState = Ref<{
  boards: BoardModel[];
  isLoaded: boolean;
}>;
