import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodo = ({ todo }) => {
  // Store'da verinin tutuldugu ilgili reduca abone olmak
  const state = useSelector((store) => store.todoReducer); // stordaki todo reducera abone olmak

  return (
    <div>
      {state.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodo;
