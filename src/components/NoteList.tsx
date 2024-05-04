import React, { useState, useEffect } from "react";
import AddNoteButtom from "./AddNoteButton";
import Note from "./Note";
import { NoteProps } from "./Note";
import { realtimeDB } from "../services/firebase";
import { push } from "firebase/database";

import {
	DatabaseReference,
	onValue,
	ref,
	DataSnapshot,
} from "firebase/database";

const NoteList: React.FC = () => {
	const [notes, setNotes] = useState<NoteProps[]>([
		{ id: "null", date: "", title: "", content: "", prop: "button" },
	]);

	const addNote = (
		id: string,
		title: string,
		content: string,
		date: string,
		prop: string
	) => {
		push(userNotesRef, { id, title, content, date });
	};
	const userNotesRef: DatabaseReference = ref(realtimeDB, "User/Notes");

	useEffect(() => {
		const onDataChange = (snapshot: DataSnapshot) => {
			const data: any[] = Object.entries(snapshot.val() || []);
			const updatedNotes = data.map(([key, element]) => ({
				id: key,
				title: element.title,
				content: element.content || "", // Assuming noteText corresponds to content
				date: element.date || "",
				prop: "note",
			}));
			updatedNotes.reverse();
			setNotes([...notes, ...updatedNotes]);
		};

		onValue(userNotesRef, onDataChange);

		return () => {
			// Cleanup function to detach the listener when component unmounts
			onValue(userNotesRef, onDataChange);
		};
	}, []); // Empty dependency array to ensure the effect runs only once

	return (
		<div className="note-list">
			{notes.map((note, index) =>
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
					<AddNoteButtom key={note.id} onAddNote={addNote} />
				)
			)}
		</div>
	);
};

export default NoteList;
