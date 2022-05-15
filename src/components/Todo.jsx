import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodoError,
  addTodoLoading,
  addTodoSucess,
  getTodoError,
  getTodoLoading,
  getTodoSucess,
  removeTodoError,
  removeTodoLoading,
  removeTodoSucess,
  toggleTodoError,
  toggleTodoLoading,
  toggleTodoSucess,
} from "../Store/action";

import { AddBtn, DeleteBtn, Button, Div } from "./styled";

export const Todo = () => {
  const { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error,
  }));
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    dispatch(getTodoLoading());
    axios
      .get("/")
      .then(({ data }) => {
        dispatch(getTodoSucess(data));
      })
      .catch((err) => {
        dispatch(getTodoError(err));
      });
  };
  const handleToggle = ({ id, status }) => {
    console.log("id", id);
    dispatch(toggleTodoLoading());
    axios
      .patch(`${id}`, { status: status ? false : true })
      .then((data) => {
        dispatch(toggleTodoSucess(data));
        getTodo();
      })
      .catch((err) => {
        dispatch(toggleTodoError(err));
      });
  };
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
      <AddBtn
        onClick={() => {
          dispatch(addTodoLoading());
          axios
            .post("/", { status: false, title: text })
            .then(({ data }) => {
              console.log(data);
              dispatch(addTodoSucess(data));
              getTodo();
              setText("");
            })
            .catch((err) => {
              dispatch(addTodoError(err));
            });
        }}
      >
        Add Todo
      </AddBtn>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Something went wrong</div>
      ) : (
        <div>
          {todos.map((e) => {
            return (
              <div key={e.id}>
                <Div status={e.status}>{e.title}</Div>
                <Button type="primary" onClick={() => handleToggle(e)}>
                  {e.status === false ? "Not Done" : "Done"}
                </Button>
                <DeleteBtn
                  onClick={() => {
                    dispatch(removeTodoLoading());
                    axios
                      .delete(`${e.id}`)
                      .then(({ data }) => {
                        dispatch(removeTodoSucess());
                        getTodo();
                      })
                      .catch((err) => {
                        dispatch(removeTodoError());
                      });
                  }}
                >
                  Delete
                </DeleteBtn>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

/*
*
  <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
<!-- HTML !-->
<button class="button-41" role="button">Button 41</button>

/* CSS 
.button-41 {
  background-color: initial;
  background-image: linear-gradient(-180deg, #00D775, #00BD68);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
  height: 44px;
  line-height: 44px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;
  width: 100%;
  z-index: 9;
  border: 0;
}

.button-41:hover {
  background: #00bd68;
}
*/
