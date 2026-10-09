import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, marksAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const doneHandler = (id) => {
    dispatch(marksAsDone(id));
  };
  return (
    <>
      <AddForm />
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
              {todo.task}
            </span>{" "}
            <button onClick={() => clickHandler(todo.id)}>Delete</button>{" "}
            <button onClick={() => doneHandler(todo.id)}>
              {todo.isDone ? "Undo" : "Done"}
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}
