import { useState } from "react";
import "./App.css";
import NoteList from "./NoteList";

interface NoteProps {
    id: string
    date: string
    title: string;
    content: string;
	prop: string;
}

const App: React.FC = () => {
    const [notes, setNotes] = useState<NoteProps[]>([{id: "null", date:"", title:"", content:"", prop:"button" }]);
  
    const addNote = (id:string, title: string, content: string, date:string, prop:string) => {
      setNotes([...notes, { id, title, content, date, prop }]);
    };
    
    return (
      <div className="app">
        <NoteList notes={notes} onAddNote={addNote} />
      </div>
    );
  };
  
export default App;

  