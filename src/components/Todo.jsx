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
} from "../Store/action";
import { Button, Col, Row } from "antd";

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
      <Button
        type="primary"
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
      </Button>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Something went wrong</div>
      ) : (
        <Row gutter={[1200, 48]}>
          {" "}
          {todos.map((e) => {
            return (
              <Col>
                <div key={e.id}>
                  {e.title} {e.status ? "Done" : "Not Done"}
                  <Button
                    type="primary"
                    danger
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
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
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

*/
