import Note from "./Note";

interface Note {
  id: string
  date: string
  title: string;
  content: string;
}

interface NoteListProps {
  notes: Note[];
} 

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <div className="note-list d-flex flex-wrap flex-row">
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} id={note.id} date={note.date} />
      ))}
    </div>
  );
};

export default NoteList;