import { useState } from "react";
import "./App.css";
import NoteList from "./NoteList";
import AddNoteButtom from "./AddNoteButtom";

interface NoteProps {
    id: number
    date: string
    title: string;
    content: string;
}


/*const notes3: NoteProps[] = [
	{
	  id: 1,
	  date: new Date().toLocaleDateString(), // Get today's date
	  title: "Note 1 Title",
	  content: "This is the content of the first note.",
	},
	{
	  id: 2,
	  date: new Date().toLocaleDateString(),
	  title: "Note 2 Title",
	  content: "This is the content of the second note.",
	}] */

const App: React.FC = () => {
	const [notes, setNotes] = useState<NoteProps[]>([]);
  
	const addNote = (id:number, title: string, content: string, date:string) => {
	  setNotes([...notes, { id, title, content, date }]);
	};
	
	return (
	  <div className="app">
		<AddNoteButtom onAddNote={addNote}/>
		<NoteList notes={notes} />
	  </div>
	);
  };
  
  export default App;
  