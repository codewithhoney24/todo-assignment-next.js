import React from "react";
import { AiFillDelete } from "react-icons/ai";

interface TaskListProps {
  tasks: string[];
  deleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask }) => {
  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-2 bg-gray-100 rounded-lg shadow-md"
        >
          <span>{task}</span>
          <button
            onClick={() => deleteTask(index)}
            className="px-2 py-1 text-sm text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white "
        
          >
             <AiFillDelete  className="flex items-center justify-center ml-3" />
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
