import { useState } from "react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

function TaskList({ tasks, deleteTask, toggleTask, editTask }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} className="task">
          {editIndex === index ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
          )}

          <div>
            <button onClick={() => toggleTask(index)}>
              <FaCheck />
            </button>

            {editIndex === index ? (
              <button
                onClick={() => {
                  editTask(index, editText);
                  setEditIndex(null);
                }}
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditIndex(index);
                  setEditText(task.text);
                }}
              >
                <FaEdit />
              </button>
            )}

            <button onClick={() => deleteTask(index)}>
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;