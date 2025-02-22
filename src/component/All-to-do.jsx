import { MdDeleteForever } from "react-icons/md";
import Styles from "./All-to-do.module.css";
import { Todoitems } from "../store/todo-items-store";
import { useContext } from "react";

function Alltodo() {
 const Contextobj = useContext(Todoitems);
 const Todos = Contextobj.Todoitems;
  return (
    <>
      {Todos.map((item, index) => (
        <div className={`row ${Styles["kg-row"]}`} key={index}>
          <div className="col-4">{item.todo}</div>
          <div className="col-4">{item.duedate}</div>
          <div className="col-2">
            <button
              type="button"
              className={`btn btn-danger ${Styles["kg-button"]}`}
              onClick={() => Contextobj.deleteItem(index)}
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Alltodo;
