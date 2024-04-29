import React from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from uuid

interface AddNoteButtonProps {
    onAddNote: (id: string, title: string, content: string, date: string) => void; // Function to call when the button is clicked
}

const AddNoteButton: React.FC<AddNoteButtonProps> = ({ onAddNote }) => {
    const handleAddNote = () => {
        const id = uuidv4(); // Generate a unique ID using uuidv4
        const currentDate = new Date().toLocaleDateString();
        onAddNote(id, "Text Note", "", currentDate);
    };

    return (
        <button className="add-note-button" onClick={handleAddNote}>
            Add Note
        </button>
    );
};

export default AddNoteButton;
