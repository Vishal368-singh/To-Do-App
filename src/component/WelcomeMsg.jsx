import Styles from './Welcome.module.css';
import { Todoitems } from '../store/todo-items-store';
import { useContext } from 'react';

const WelcomeMsg =()=>{
  const { Todoitems: todoList } = useContext(Todoitems);

  return (
    todoList.length === 0 && (
      <p className={Styles.welcome}>Welcome To-do : Enjoy your Day!</p>
    )
  );
}
export default WelcomeMsg;