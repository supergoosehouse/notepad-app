import "./App.css";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
const App: React.FC = () => {
	return (
		<Router>
			<div>
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
					></div>
					<section>
						<Routes>
							<Route path="/signup" element={<Signup />} />
							<Route path="/login" element={<Login />} />
							<Route path="/home" element={<Home />} />
						</Routes>
					</section>
				</div>
			</div>
		</Router>
		//<div className="app">
		//<Header />
		//<NoteList />
		//</div>
	);
};

export default App;
