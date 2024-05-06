import "./App.css";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false); // Initial state is not authenticated

  /*Firebase Authentication utilizes a combination of 
  techniques like cookies and server-side sessions
   to maintain the user's login state.*/
  // By default Firebase stores if user was logged in only during session
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe on unmount
  }, []);

  if (loading) {
    // Display loading indicator while authentication state is determined
    return <div>Loading...</div>;
  }

  return (
    <Router>
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
          <section>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={authenticated ? <Home /> : <Navigate to="/login" />}
              />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  );
};
export default App;
