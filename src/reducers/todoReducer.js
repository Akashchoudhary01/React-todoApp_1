function todoReducer(state, action) {
    switch (action.type) {
      case "add_todo": {
        const todoText = action.payload.todoText;
        return [
          ...state,
          { id: state.length + 1, todoData: todoText, finished: false },
        ];
      }
  
      case "edit_todo": {
        const { id, todoText } = action.payload;
        return state.map((t) =>
          t.id === id ? { ...t, todoData: todoText } : t
        );
      }
  
      case "delete_todo": {
        const { id } = action.payload;
        return state.filter((t) => t.id !== id);
      }
  
      case "finish_todo": {
        const { id, isFinished } = action.payload;
        return state.map((t) =>
          t.id === id ? { ...t, finished: isFinished } : t
        );
      }
  
      default:
        return state;
    }
  }
  
  export default todoReducer;
  