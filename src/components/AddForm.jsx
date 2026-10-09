import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [Task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(Task);
    dispatch(addTodo(Task));
    setTask("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={Task}
        onChange={(e) => setTask(e.target.value)}
      />{" "}
      <button>Add Notes</button>
    </form>
  );
}
