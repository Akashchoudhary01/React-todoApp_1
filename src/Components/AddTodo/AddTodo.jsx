import { useState } from "react";

function AddTodo({ updateList }) {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="Add Your Text"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          if (inputText.trim() !== "") { // Prevent adding empty todos
            updateList(inputText.trim());
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
