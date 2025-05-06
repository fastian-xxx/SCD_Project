import React from 'react';
import { useParams } from 'react-router-dom';

export default function TaskDetail() {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-2xl">Task Detail: {id}</h1>
      {/* Task details/form here */}
    </div>
  );
}
