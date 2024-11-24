"use client"
import React, { useState } from "react";
import TaskList from "../app/components/TaskList";




export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 p-4 sm:p-8 md:p-12 lg:p-16">

      <div className="max-w-xl mx-auto  mt-24 bg-white p-4 rounded-lg shadow-lg shadow-black">
        <h1 className="text-3xl font-bold text-center text-purple-600">
          🌈 Colorful ToDo App
        </h1>
        <div className="mt-4 flex gap-2 flex-wrap">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task..."
            className="flex-1 px-4 py-2 rounded-lg border border-pink-600 focus:outline-none focus:ring focus:ring-purple-300 sm:w-full md:w-3/4"
          />
          <button
            onClick={addTask}
            className="font-bold px-4 py-2 bg-purple-500 text-white rounded-l hover:bg-pink-400 sm:w-full md:w-auto"
          >
            Add Task
          </button>
        </div>
        <TaskList  tasks={tasks} deleteTask={deleteTask}/>
      </div>

      
      <div className="container mt-10 mx-auto px-4 sm:px-8">
  <h1 className="text-center text-fuchsia-950 text-lg sm:text-xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 max-w-xl mx-auto bg-white p-4 rounded-lg shadow-lg shadow-black">
    Assignment by Nousheen Atif
  </h1>
</div>
      
    </div>
    
  );
}
