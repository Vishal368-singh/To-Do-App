import Styles from "./Mainlabel.module.css";
import { useContext, useRef } from "react";
import { MdAddTask } from "react-icons/md";
import { Todoitems } from "../store/todo-items-store";

function Mainlabel() {
  const Contextobj = useContext(Todoitems);
  // const Todos = Contextobj.Todoitems;
  const todoNameEle =useRef("")
  const todoDuedate =useRef("")


  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameEle.current.value;
    const  duedate = todoDuedate.current.value;
    todoDuedate.current.value = "";
    todoNameEle.current.value = "";
    Contextobj.addNewItem(todoName, duedate);
  };

  return (
    <form className={`row ${Styles["kg-row"]}`} onSubmit={handleAddButtonClick}>
      <div className="col-4">
        <input
          type="text"
          ref={todoNameEle}
          placeholder="Enter the To-Do"
          required
        />
      </div>

      <div className="col-4">
        <input
          type="date"
          ref={todoDuedate}
          required
        />
      </div>

      <div className="col-2">
        <button
          type="button"
          className={Styles["kg-button"]}
          onClick={handleAddButtonClick}
        >
          <MdAddTask />
        </button>
      </div>
    </form>
  );
}

export default Mainlabel;
