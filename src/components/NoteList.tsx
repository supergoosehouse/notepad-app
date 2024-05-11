import React, { useState, useEffect } from "react";
import AddNoteButton from "./AddNoteButton";
import Note from "./Note";
import { NoteProps } from "./Note";
import { realtimeDB } from "../services/firebase";
import { push } from "firebase/database";
import { getAuth } from "firebase/auth";

import {
	DatabaseReference,
	onValue,
	ref,
	DataSnapshot,
} from "firebase/database";

const NoteList: React.FC = () => {
	// Initalisation of the notes list with AddNoteButton
	const [notes, setNotes] = useState<NoteProps[]>([
		{ id: "null", date: "", title: "", content: "", prop: "button" },
	]);

	// Note in the database has the following attributes: title, content, date.
	// Meanwhile, the Note component has the following attributes:
	// title, content, date, props, and id.
	// The id is used for deleting elements from the database and is equal to the key of the note in the database.
	// Props include functions for setting up the app's "add note" button.
	const addNote = (title: string, content: string, date: string) => {
		push(userNotesRef, { title, content, date });
	};
	const auth = getAuth();
	const uid = auth.currentUser?.uid;

	const userNotesRef: DatabaseReference = ref(realtimeDB, `User/${uid}`);

	useEffect(() => {
		const onDataChange = (snapshot: DataSnapshot) => {
			const data: any[] = Object.entries(snapshot.val() || []);

			const updatedNotes = data.map(([key, element]) => ({
				id: key, // This id is for the local list
				title: element.title,
				content: element.content || "",
				date: element.date || "",
				prop: "note",
			}));
			updatedNotes.reverse();

			setNotes([notes[0], ...updatedNotes]);
		};

		onValue(userNotesRef, onDataChange);

		return () => {
			// Cleanup function to detach the listener when component unmounts
			onValue(userNotesRef, onDataChange);
		};
	}, []); // Empty dependency array to ensure the effect runs only once

	return (
		<div
			className="note-list"
			style={{
				overflowX: "hidden",
			}}
		>
			{notes.map((note) =>
				note.prop === "note" ? (
					<Note
						key={note.id}
						title={note.title}
						content={note.content}
						id={note.id}
						date={note.date}
						prop={note.prop}
					/>
				) : (
					<AddNoteButton key={note.id} onAddNote={addNote} />
				)
			)}
		</div>
	);
};

export default NoteList;
