import React from "react";
import { remove, ref } from "firebase/database";
import { realtimeDB } from "../services/firebase";

interface DeleteNoteButtonProps {
  id: string;
}

const DeleteNoteButton: React.FC<DeleteNoteButtonProps> = ({ id }) => {
  const handleDeleteNote = () => {
    const elementRef = ref(realtimeDB, `User/Notes/${id}`);

    remove(elementRef)
      .then(() => {
        // Element deleted successfully
        console.log("Element removed from database " + id);
      })
      .catch((error) => {
        // Handle any errors during deletion
        console.error("Error removing element:", error);
      });
  };
  return (
    <button className="delete-note-button" onClick={handleDeleteNote}>
      {"Del"}
    </button>
  );
};

export default DeleteNoteButton;
