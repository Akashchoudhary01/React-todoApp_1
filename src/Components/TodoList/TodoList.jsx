import Todo from "../Todo/Todo";
import TodoContext from "../../Context/TodoContext";
import { useContext } from "react";

function TodoList() {
  const { list, setList } = useContext(TodoContext);

  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            todoData={todo.todoData}
            changeFinished={(isFinished) => {
              const updatedList = list.map((t) =>
                t.id === todo.id ? { ...t, finished: isFinished } : t
              );
              setList(updatedList);
            }}
            onDelete={() => {
              const updatedList = list.filter((t) => t.id !== todo.id);
              setList(updatedList);
            }}
            onEdit={(todoText) => {
              const updatedList = list.map((t) =>
                t.id === todo.id ? { ...t, todoData: todoText } : t
              );
              setList(updatedList);
            }}
          />
        ))}
    </div>
  );
}

export default TodoList;
