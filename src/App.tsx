import "./App.css";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import TextEditor from "./components/TextEditor";
import Toolbar from "./components/Toolbar";

const App: React.FC = () => {
	return (
		<div
			className="app-container"
			style={{ height: "100vh", overflow: "hidden" }}
		>
			<Header />
			<div
				style={{
					marginTop: "50px",
					overflowY: "auto",
					height: "calc(100vh - 50px)",
				}}
			>
				<TextEditor />
				{/* <NoteList /> */}
			</div>
		</div>
	);
};

export default App;
