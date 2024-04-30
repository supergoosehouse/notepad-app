interface NoteProps {
    id: string
    date: string
    title: string;
    content: string;
    prop: string;
    
}

const Note: React.FC<NoteProps> = ({id, title, content, date, prop}) => {
  return (
  <div className="note">
    <div className="note-title">{title}</div>
    <div className="note-content">{content}</div>
    <div className="note-date">{date}</div>
  </div>
);
};
  
export default Note;