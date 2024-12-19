import Todo from "../Todo/Todo";
import TodoContext from "../../Context/TodoContext";
import { useContext } from "react";
import TodoDispatchContext from "../../Context/TodoDispatchContext";

function TodoList() {
  const { list } = useContext(TodoContext);
  const { dispatch } = useContext(TodoDispatchContext);

  if (!list || list.length === 0) {
    return <div>No todos available</div>;
  }

  function onFinished(todoId, isFinished) {
    dispatch({ type: "finish_todo", payload: { id: todoId, isFinished } });
  }

  function onDelete(todoId) {
    dispatch({ type: "delete_todo", payload: { id: todoId } });
  }

  function onEdit(todoId, todoText) {
    dispatch({ type: "edit_todo", payload: { id: todoId, todoText } });
  }

  return (
    <div>
      {list.map((todo) => (
        <Todo
          key={todo.id}
          todoData={todo.todoData}
          isFinished={todo.finished}
          changeFinished={(isFinished) => onFinished(todo.id, isFinished)}
          onDelete={() => onDelete(todo.id)}
          onEdit={(todoText) => onEdit(todo.id, todoText)}
        />
      ))}
    </div>
  );
}

export default TodoList;
