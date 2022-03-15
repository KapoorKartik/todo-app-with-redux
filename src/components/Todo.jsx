import axios from "../utils/axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoError, addTodoLoading, addTodoSucess } from "../Store/action";

export const Todo = () => {
  const { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error,
  }));
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Add something"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodoLoading());
          axios
            .post("/", { status: false, title: text })
            .then(({ data }) => {
              console.log(data);
              dispatch(addTodoSucess(data));
            })
            .catch((err) => {
              dispatch(addTodoError(err));
            });
        }}
      >
        Add Todo
      </button>
      {todos.map((e) => {
        return (
          <div key={e.id}>
            {e.title} {e.status ? "Done" : "Not Done"}
          </div>
        );
      })}
    </div>
  );
};
