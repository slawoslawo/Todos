import { useContext } from "react";
import { createContext } from "react";
import TodoStore from "./todoStore";
import ActivityStore from "./todoStore";

interface Store{

  todoStore: TodoStore
}

export const store: Store = {
  todoStore: new TodoStore()
}

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext)
}
