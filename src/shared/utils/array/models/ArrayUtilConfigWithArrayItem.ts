import type { ArrayUtilConfig } from "./ArrayUtilConfig";

export interface ArrayUtilConfigWithArrayItem<T> extends ArrayUtilConfig<T> {
  arrayItem: T;
}
