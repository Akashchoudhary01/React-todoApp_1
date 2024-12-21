import { ADD_TODO, EDIT_TODO, DELETE_TODO, FINISH_TODO } from '../constants/action.js';

function todoReducer(state= [], action) {
    switch (action.type) {
      case ADD_TODO: {
        const todoText = action.payload.todoText;
        return [
          ...state,
          { id: state.length + 1, todoData: todoText, finished: false },
        ];
      }
  
      case EDIT_TODO: {
        const { id, todoText } = action.payload;
        return state.map((t) =>
          t.id === id ? { ...t, todoData: todoText } : t
        );
      }
  
      case DELETE_TODO: {
        const { id } = action.payload;
        return state.filter((t) => t.id !== id);
      }
  
      case FINISH_TODO: {
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
  