import React from "react";

interface AddNoteButtonProps {
  onAddNote: (
    title: string,
    content: string,
    date: string,
    prop: string
  ) => void; // Function to call when the button is clicked
}

const AddNoteButton: React.FC<AddNoteButtonProps> = ({ onAddNote }) => {
  const handleAddNote = () => {
    const currentDate = new Date().toLocaleDateString();
    onAddNote("Text Note", "", currentDate, "note");
  };

  return (
    <button className="add-note-button" onClick={handleAddNote}>
      {"+"}
    </button>
  );
};

export default AddNoteButton;
