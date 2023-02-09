import { addItemAfterArrayItem } from "./addItemAfterArrayItem";
import type { ArrayUtilConfigWithArrayItem } from "./models/ArrayUtilConfigWithArrayItem";
import { removeItemFromArray } from "./removeItemFromArray";

export const moveItemAfterArrayItem = <T>({
  array,
  item,
  arrayItem,
  uniqueKey,
}: ArrayUtilConfigWithArrayItem<T>): T[] => {
  const filteredArray = removeItemFromArray<T>({ array, item, uniqueKey });

  return addItemAfterArrayItem<T>({
    array: filteredArray,
    item,
    arrayItem,
    uniqueKey,
  });
};
