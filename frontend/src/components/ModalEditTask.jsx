import React from 'react';
import { Dialog } from '@headlessui/react';

export default function ModalEditTask({ isOpen, onClose, task, onSave }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black bg-opacity-30" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white dark:bg-gray-800 p-6 rounded-md">
          <Dialog.Title>Edit Task</Dialog.Title>
          {/* Form fields go here */}
          <button onClick={onSave} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">Save</button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
