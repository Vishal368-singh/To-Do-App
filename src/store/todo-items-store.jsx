import { createContext } from "react";
import { useReducer } from "react";

export const Todoitems = createContext({
  Todoitems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});


const ToDoReducer = (currval, action) => {
  let newTodoItems = currval;
  if (action.type === "ADD_TODO") {
    newTodoItems = [
      ...currval,
      { todo: action.payload.todo, duedate: action.payload.duedate },
    ];
  } else if (action.type === "DeleteToDO") {
    newTodoItems = currval.filter((_, i) => i !== action.payload.index);
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({children}) => {
  const [addTodo, dispatchaddTodo] = useReducer(ToDoReducer, []);
  const addNewItem = (todo, duedate) => {
    const newItemAction = {
      type: "ADD_TODO",
      payload: {
        todo,
        duedate,
      },
    };
    dispatchaddTodo(newItemAction);
    // setaddTodo((currval) => [...currval, { todo: todo, duedate: duedate }]);
  };

  const deleteItem = (index) => {
    const newItemAction = {
      type: "DeleteToDO",
      payload: {
        index: index,
      },
    };
    dispatchaddTodo(newItemAction);

    // const Ntodo = addTodo.filter((_, i) => i !== index);
    // setaddTodo(Ntodo);
  };
  return (
    <Todoitems.Provider
      value={{
        Todoitems: addTodo,
        deleteItem,
        addNewItem,
      }}
    >
      {children}
    </Todoitems.Provider>
  );
};
export default TodoItemsContextProvider;
