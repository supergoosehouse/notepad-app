import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase.ts";
import { useNavigate } from "react-router-dom";
import Header from "./Header.tsx";
import NoteList from "./NoteList.tsx";
const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <nav>
        <Header />
        <NoteList />

        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Home;
