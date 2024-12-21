import { useSelector} from 'react-redux';
import Todo from "../Todo/Todo";

function TodoList({editTodo , deleteTodo , todoFinished})  {

  const list = useSelector((state) => state.todo);
  

  if (!list || list.length == 0) {
    return <div>No todos available</div>;
  }

  function onFinished(todoId, isFinished) {
    todoFinished(todoId, isFinished );
  }

  function onDelete(todo) {
    console.log("deleteTodo", todo);
    
    deleteTodo(todo );
  }

  function onEdit(todo, todoText) {
    editTodo(todo, todoText );
  }

  return (
    <div>
      {list.map((todo) => (
        <Todo
          key={todo.id}
          todoData={todo.todoData}
          isFinished={todo.finished}
          changeFinished={(isFinished) => onFinished(todo.id, isFinished)}
          onDelete={() => onDelete(todo)}
          onEdit={(todoText) => onEdit(todo.id, todoText)}
        />
      ))}
    </div>
  );
}

export default TodoList;
