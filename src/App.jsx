import Apptitle from "./component/Apptitle";
import Mainlabel from "./component/Mainlabel";
import Alltodo from "./component/All-to-do";
import WelcomeMsg from "./component/WelcomeMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./App.module.css";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  // const [addTodo , setaddTodo] =useState([]);
  return (
    <TodoItemsContextProvider>
      <div className="container todo-container">
        <Apptitle />
        <Mainlabel />
        <div className={Styles["todo-container"]}>
          <WelcomeMsg />
          <Alltodo />
        </div>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
