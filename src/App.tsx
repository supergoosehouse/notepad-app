import { useState } from "react";
import NoteGrid from "./components/NoteGrid";
import "./App.css";
import TextEditor from "./components/TextEditor";
import Header from "./components/Header";
import BurgerMenu from "./components/BurgerMenu";

function App() {
	return (
		<>
			<Header></Header>
			<TextEditor></TextEditor>
		</>
	);
}

export default App;
