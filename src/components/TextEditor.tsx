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

	return (
		<>
			<div
				id="text-editor-container"
				style={{ height: "calc(100vh - 50px)", overflowY: "auto" }}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						marginTop: "20px",
						width: "600px",
						marginLeft: "auto",
						marginRight: "auto",
					}}
				>
					<div
						data-text="Note"
						className="form-control editor-placeholder"
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
						data-text="Type your note here"
						className="form-control editor-placeholder"
						contentEditable="true"
						ref={textEditorRef}
						onInput={handleChange}
						style={{
							boxShadow: "none",
							border: "",
							borderColor: "transparent",
							fontSize: "18px",
							minHeight: "150px",
							marginBottom: "200px",
						}}
					></div>
				</div>
				<Toolbar />
			</div>
		</>
	);
};

export default TextEditor;
