import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase.ts";
import { useNavigate } from "react-router-dom";
import Header from "./Header.tsx";
import NoteList from "./NoteList.tsx";
const Home = () => {
  return (
    <>
      <nav>
        <Header />
        <NoteList />
      </nav>
    </>
  );
};

export default Home;
