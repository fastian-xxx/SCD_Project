// src/pages/Dashboard.jsx
import React, { useState, useContext, useEffect } from 'react';
import { PlusCircle } from 'lucide-react';
import DraggableList from '../components/DraggableList';
import DarkModeToggle from '../components/DarkModeToggle';
import { ThemeContext } from '../context/ThemeContext';

export default function Dashboard() {
  const { theme } = useContext(ThemeContext);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Load from localStorage once
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks') || '[]'));
  }, []);

  // Persist whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (!newTask.trim()) return;
    setTasks([{ id: Date.now().toString(), content: newTask }, ...tasks]);
    setNewTask('');
  };

  const handleEdit = (item) => {
    setNewTask(item.content);
    setTasks(tasks.filter(t => t.id !== item.id));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const updated = Array.from(tasks);
    const [moved] = updated.splice(result.source.index, 1);
    updated.splice(result.destination.index, 0, moved);
    setTasks(updated);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 
        ${theme === 'dark' ? 'bg-backgroundDark' : 'bg-backgroundLight'}`}
    >
      <div
        className={`
          w-full max-w-md
          bg-white dark:bg-gray-800
          p-6 rounded-2xl
          shadow-lg dark:shadow-xl
          transform transition-transform duration-300
          hover:scale-105
          animate-glow
        `}
      >
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <DarkModeToggle />
        </header>

        {/* Add Task */}
        <div className="flex mb-4 items-center">
          <input
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="What’s on your mind?"
            className="
              flex-grow px-4 py-2
              rounded-l-lg
              bg-gray-100 dark:bg-gray-700
              border border-gray-300 dark:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-secondary
            "
          />
          <button
            onClick={handleAdd}
            aria-label="Add task"
            className="
              p-2 
              bg-transparent
              hover:bg-gray-200 dark:hover:bg-gray-600 
              rounded-r-lg
              transition
            "
          >
            <PlusCircle size={24} className="text-golden" />
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center italic text-gray-500 dark:text-gray-400">
              No tasks yet—add one above!
            </div>
          ) : (
            <DraggableList
              items={tasks}
              onDragEnd={handleDragEnd}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
}
