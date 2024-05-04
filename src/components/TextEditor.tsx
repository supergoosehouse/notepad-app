import React, { ChangeEvent, useState, useRef } from "react";
import Toolbar from "./Toolbar";
import { realtimeDB } from "../services/firebase";

const TextEditor = () => {
	const [text, setText] = useState("");
	const [title, setTitle] = useState("");
	const textEditorRef = useRef<HTMLDivElement | null>(null);

	const handleChange = (event: ChangeEvent<HTMLDivElement>) => {
		setText(event.target.textContent || "");
	};

	const handleTitleChange = (event: ChangeEvent<HTMLDivElement>) => {
		setTitle(event.target.textContent || "");
	};

	const handleKeyOnTitle = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Enter") {
			event.preventDefault();
			if (textEditorRef.current) {
				textEditorRef.current.focus();
			}
		}
	};

	const isTextEmpty = () => {
		return text === "" && "Type your note here";
	};

	const isTitleEmpty = () => {
		return title === "" && "Note";
	};

	return (
		<>
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
					data-text="Note"
					className="form-control"
					contentEditable="true"
					onInput={handleTitleChange}
					onKeyDown={handleKeyOnTitle}
					style={{
						boxShadow: "none",
						border: "",
						borderColor: "transparent",
						fontSize: "24px",
						marginBottom: "0px",
					}}
				></div>
				<p
					style={{
						padding: ".375rem .75rem",
						position: "absolute",
						color: "#ccc",
						pointerEvents: "none",
						width: "600px",
						fontSize: "24px",
						marginLeft: "auto",
						marginRight: "auto",
						textAlign: "left",
						visibility: title === "" ? "visible" : "hidden",
					}}
				>
					{isTitleEmpty()}
				</p>
			</div>
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
					ref={textEditorRef}
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
		</>
	);
};

export default TextEditor;
