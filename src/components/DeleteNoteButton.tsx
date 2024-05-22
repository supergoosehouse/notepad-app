import React from "react";
import { remove, ref, DatabaseReference } from "firebase/database";
import { realtimeDB } from "../services/firebase";
import { getAuth } from "firebase/auth";

interface DeleteNoteButtonProps {
	id: string;
}

const DeleteNoteButton: React.FC<DeleteNoteButtonProps> = ({ id }) => {
	const handleDeleteNote = () => {
		const auth = getAuth();
		const uid = auth.currentUser?.uid;
		const elementRef = ref(realtimeDB, `User/${uid}/${id}`);

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
		<button
			className="delete-note-button btn border-black border-1"
			onClick={handleDeleteNote}
			style={{ zIndex: "2" }}
		>
			{"Del"}
		</button>
	);
};

export default DeleteNoteButton;
