import "./App.css";
import NoteList from "./components/NoteList";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <NoteList />
    </div>
  );
};

export default App;
