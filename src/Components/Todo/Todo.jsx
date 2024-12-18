import { useState } from "react";

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
  const [finished, setFinished] = useState(isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData); // Initialize with `todoData`

  return (
    <div>
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />

      {/* Editing Mode */}
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)} // Fix spelling of `onChange`
        />
      ) : (
        <span>{todoData}</span>
      )}

      {/* Edit/Save Button */}
      <button
        onClick={() => {
          if (isEditing) {
            onEdit(editText); // Save the edited text
          }
          setIsEditing(!isEditing); // Toggle edit mode
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>

      {/* Delete Button */}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;
