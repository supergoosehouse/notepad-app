import React from "react";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
	return (
		<>
			<div
				style={{
					height: "50px",
					marginBottom: "30px",
					background: "#e3e3e3",
					border: "var(--bs-border-width) solid var(--bs-border-color)",
				}}
			>
				<BurgerMenu></BurgerMenu>
			</div>
		</>
	);
};

export default Header;
