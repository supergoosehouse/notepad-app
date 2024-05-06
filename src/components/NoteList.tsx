import React, { useState } from "react";
import AddNoteButtom from "./AddNoteButton";
import Note from "./Note";
import { NoteProps } from "./Note";
import { styleText } from "util";

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
		setNotes([...notes, { id, title, content, date, prop }]);
	};

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
