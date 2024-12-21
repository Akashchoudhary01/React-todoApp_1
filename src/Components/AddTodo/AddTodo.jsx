import { useState } from "react";
import "./AddTodo.css";

function AddTodo({ addTodo }) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="add-todo-container">
      <input
        type="text"
        value={inputText}
        placeholder="Add Your Todo"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          if (inputText.trim() !== "") {
            addTodo(inputText);
            setInputText("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
