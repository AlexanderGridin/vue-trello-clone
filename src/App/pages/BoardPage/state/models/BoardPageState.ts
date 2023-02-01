import type { Ref, UnwrapNestedRefs } from "vue";
import type { BoardModel } from "@pages/BoardPage/models/BoardModel";

export type BoardPageState = Ref<{
  boards: BoardModel[];
  board: BoardModel;
}>;
