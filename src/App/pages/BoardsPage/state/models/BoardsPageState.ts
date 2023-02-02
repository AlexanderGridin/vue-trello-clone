import type { Ref } from "vue";
import type { BoardModel } from "@pages/BoardPage/models/BoardModel";

export type BoardsPageState = Ref<{
  boards: BoardModel[];
  isLoaded: boolean;
}>;
