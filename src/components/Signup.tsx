import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, realtimeDB } from "../services/firebase.ts";
import { getDatabase, ref, set } from "firebase/database";

const Signup = () => {
	//Example: navigate('/products') would navigate to the route at the path /products.
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Asynchronous functions can perform operations that take time
	// to complete (like fetching  data from a server) without blocking
	// the execution of other parts of your code.
	// e - event object
	const onSubmit = async (e: any) => {
		// The default behavior of a form submission is to reload the entire page.
		// By calling preventDefault, you prevent this default behavior from happening
		e.preventDefault();

		await createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				// Signed in
				const user = userCredential.user;
				const dbRef = ref(realtimeDB, `User/${user.uid}`);
				await set(dbRef, true);
				console.log(user);
				navigate("/login");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	return (
		<>
			<div
				style={{
					height: "calc(100vh - 50px)",
					width: "100%",
					alignContent: "center",
					position: "absolute",
				}}
			>
				<form
					style={{
						width: "400px",
						margin: "0 auto",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div style={{ display: "flex", marginBottom: "10px" }}>
						<label htmlFor="email-address">Email address:</label>
						<input
							id="email-address"
							name="email"
							type="email"
							required
							placeholder="Email address"
							onChange={(e) => setEmail(e.target.value)}
							style={{ marginLeft: "auto" }}
						/>
					</div>

					<div style={{ display: "flex", marginBottom: "10px" }}>
						<label htmlFor="password">Password</label>
						<input
							id="password"
							name="password"
							type="password"
							required
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
							style={{ marginLeft: "auto" }}
						/>
					</div>

					<div style={{ display: "flex", marginBottom: "10px" }}>
						<button
							onClick={onSubmit}
							style={{ marginLeft: "auto", marginRight: "auto" }}
						>
							Sign Up
						</button>
					</div>
				</form>

				<p className="text-sm text-center">
					Already have an account? <NavLink to="/login">Sign in</NavLink>
				</p>
			</div>
		</>
	);
};

export default Signup;
