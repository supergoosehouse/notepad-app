import React from "react";
import UserIcon from "../assets/UserIcon.png";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

//Todo: https://getbootstrap.com/docs/4.0/components/dropdowns/
const BurgerMenu = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/login");
				console.log("Signed out successfully");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<>
			<div
				className="dropdown"
				style={{
					float: "right",
					marginRight: "10px",
					marginTop: "auto",
					marginBottom: "auto",
					position: "absolute",
					top: "50%",
					transform: "translateY(-50%)",
					zIndex: "5",
				}}
			>
				<div className="dropdown">
					<button
						className="btn btn-secondary rounded-3 border-1"
						type="button"
						id="dropdownMenuButton"
						data-bs-toggle="dropdown"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						style={{
							width: "40px",
							height: "40px",
							alignItems: "center",
							display: "flex",
							flexDirection: "column",
							backgroundColor: "white",
						}}
					>
						<img
							src={UserIcon}
							alt=""
							style={{
								width: "20px",
								height: "20px",
								marginTop: "auto",
								marginBottom: "auto",
							}}
						/>
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Settings
						</a>
						<a className="dropdown-item" onClick={handleLogout} href="#">
							Logout
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default BurgerMenu;
