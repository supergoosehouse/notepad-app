
interface NoteProps {
    id: number
    date: string
    title: string;
    content: string;
  }

const Note: React.FC<NoteProps> = ({id, title, content, date}) => {
    return (
      <div className="note">
        <div className="note-id">{id}</div>
        <div className="note-title">{title}</div>
        <div className="note-content">{content}</div>
        <div className="note-date">{date}</div>
      </div>
    );
  };
  
export default Note;