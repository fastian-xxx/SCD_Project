import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { motion } from 'framer-motion';
import { Edit2, Trash2 } from 'lucide-react';

export default function DraggableList({ items, onDragEnd, onEdit, onDelete }) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {provided => (
                  <motion.div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="
                      flex justify-between items-center 
                      p-4 bg-white dark:bg-gray-700 
                      rounded-lg shadow-md dark:shadow-lg
                    "
                  >
                    <span>{item.content}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onEdit(item)}
                        aria-label="Edit task"
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                      >
                        <Edit2 size={18} className="text-secondary" />
                      </button>
                      <button
                        onClick={() => onDelete(item.id)}
                        aria-label="Delete task"
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                      >
                        <Trash2 size={18} className="text-red-500" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
