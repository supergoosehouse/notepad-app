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
        <section>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </section>
      </div>
    </Router>
    //<div className="app">
    //<Header />
    //<NoteList />
    //</div>
  );
};

export default App;
