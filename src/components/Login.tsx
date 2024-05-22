import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase.ts";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLogin = (e: any) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigate("/");
				console.log(user);
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
							onClick={onLogin}
							style={{ marginLeft: "auto", marginRight: "auto" }}
						>
							Login
						</button>
					</div>
				</form>

				<p className="text-sm text-center">
					No account yet? <NavLink to="/signup">Sign up</NavLink>
				</p>
			</div>
		</>
	);
};

export default Login;
