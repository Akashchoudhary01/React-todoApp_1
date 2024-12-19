import { useContext, useState } from "react";
import TodoDispatchContext from "../../Context/TodoDispatchContext";

function AddTodo() {
  const [inputText, setInputText] = useState("");
  const { dispatch } = useContext(TodoDispatchContext);

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
          if (inputText.trim() !== "") {
            dispatch({ type: "add_todo", payload: { todoText: inputText } });
            setInputText(""); // Reset input field to an empty string
          }
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
