import React from "react";
import AddNoteButtom from "./AddNoteButtom";
import Note from "./Note";

interface Note {
  id: string;
  date: string;
  title: string;
  content: string;
  prop: string;
}

interface NoteListProps {
  notes: Note[];
  button?: (id: string, title: string, content: string, date: string, prop: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, button }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) =>
        note.prop === 'note' ? (
          <Note
            key={note.id}
            title={note.title}
            content={note.content}
            id={note.id}
            date={note.date}
            prop={note.prop}
          />
        ) : (
          <AddNoteButtom
            key={note.id}
            onAddNote={() => button && button(note.id, "text", "", new Date().toLocaleDateString(), "note")}
          />
        )
      )}
    </div>
  );
};


export default NoteList;
