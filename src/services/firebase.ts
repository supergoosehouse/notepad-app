import { FirebaseApp, initializeApp } from "firebase/app";
import { Database, getDatabase } from "firebase/database";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/compat/app";
const firebaseConfig = {
	apiKey: "AIzaSyCAe7R1BN23ZeKoT--Jmu6Pv7Zi0-1vhBQ",
	authDomain: "goose-notepad-app7fd6g8.firebaseapp.com",
	databaseURL:
		"https://goose-notepad-app7fd6g8-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "goose-notepad-app7fd6g8",
	storageBucket: "goose-notepad-app7fd6g8.appspot.com",
	messagingSenderId: "1000554543110",
	appId: "1:1000554543110:web:721263bbec02874230ab87",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export const realtimeDB: Database = getDatabase(app);
export const auth: Auth = getAuth(app);
