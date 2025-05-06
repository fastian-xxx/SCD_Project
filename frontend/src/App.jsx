import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './pages/Dashboard';
import TaskDetail from './pages/TaskDetail';
import ProfileSettings from './pages/ProfileSettings';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/profile" element={<ProfileSettings />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
