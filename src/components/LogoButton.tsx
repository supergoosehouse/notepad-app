import React, { useState } from "react";
import logo from "../assets/logo.png";
import logoClicked from "../assets/logo-clicked.png";
import honkSound from "../assets/honk-sound.mp3";

interface Styles {
	[key: string]: string | number;
}
interface Props {
	stylesList: Styles;
}

const LogoButton: React.FC<Props> = ({ stylesList }) => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(true);
		if (!clicked) {
			const audio = new Audio(honkSound);
			audio.play();
		}
	};

	return (
		<>
			<img
				onMouseDown={handleClick}
				onMouseUp={() => {
					setClicked(false);
				}}
				onMouseLeave={() => {
					setClicked(false);
				}}
				src={!clicked ? logo : logoClicked}
				alt="logo"
				className="rounded-3"
				style={stylesList}
				draggable="false"
			/>
		</>
	);
};

export default LogoButton;
