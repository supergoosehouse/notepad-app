import React, { ChangeEvent, useState } from "react";
import Toolbar from "./Toolbar";
import { realtimeDB } from "../services/firebase";

const TextEditor = () => {
	const [text, setText] = useState("");

	const handleChange = (event: ChangeEvent<HTMLDivElement>) => {
		setText(event.target.textContent || "");
	};

	const isTextEmpty = () => {
		return text === "" && "Type your note here";
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "600px",
				marginLeft: "auto",
				marginRight: "auto",
			}}
		>
			<div
				data-text="Enter text here"
				className="form-control"
				contentEditable="true"
				onInput={handleChange}
				style={{
					boxShadow: "none",
					border: "",
					borderColor: "transparent",
					fontSize: "18px",
					//width: "600px",
					minHeight: "150px",
					marginBottom: "200px",
				}}
			></div>
			<p
				style={{
					padding: ".375rem .75rem",
					position: "absolute",
					color: "#ccc",
					pointerEvents: "none",
					width: "600px",
					fontSize: "18px",
					marginLeft: "auto",
					marginRight: "auto",
					textAlign: "left",
					visibility: text === "" ? "visible" : "hidden",
				}}
			>
				{isTextEmpty()}
			</p>
		</div>
	);
};

export default TextEditor;
