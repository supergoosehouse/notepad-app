import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import Toolbar from "./Toolbar";
import { realtimeDB } from "../services/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { DatabaseReference, DataSnapshot, ref } from "firebase/database";
import { getAuth, User } from "firebase/auth";
import { onValue, set } from "firebase/database";

const TextEditor = () => {
	const { noteId } = useParams();
	const [text, setText] = useState("");
	const [title, setTitle] = useState("");

	const textEditorRef = useRef<HTMLDivElement | null>(null);
	const titleEditorRef = useRef<HTMLDivElement | null>(null);

	const currentUser: User | null = getAuth().currentUser;
	const userNoteRef: DatabaseReference = ref(
		realtimeDB,
		`User/${currentUser?.uid}/${noteId}`
	);
	const contentRef: DatabaseReference = ref(
		realtimeDB,
		`User/${currentUser?.uid}/${noteId}/content`
	);

	const navigate = useNavigate();

	useEffect(() => {
		const onDataChange = (snapshot: DataSnapshot) => {
			const data = snapshot.val();
			if (data) {
				if (data.content && data.content !== text) {
					setText(data.content);
				}
				if (data.title && data.title !== title) {
					setTitle(data.title);
				}
			}
		};

		onValue(userNoteRef, onDataChange);

		return () => {
			onValue(userNoteRef, onDataChange);
		};
	}, []);

	//old caret effect
	useEffect(() => {
		if (textEditorRef.current) {
			const selection = window.getSelection();
			const range = document.createRange();
			range.selectNodeContents(textEditorRef.current);
			range.collapse(false); // Set caret to end of content
			selection?.removeAllRanges();
			selection?.addRange(range);
		}
	}, [text]);

	// useEffect(() => {
	// 	if (titleEditorRef.current) {
	// 		const selection = window.getSelection();
	// 		const range = document.createRange();
	// 		range.selectNodeContents(titleEditorRef.current);
	// 		range.collapse(false); // Set caret to end of content
	// 		selection?.removeAllRanges();
	// 		selection?.addRange(range);
	// 	}
	// }, [title]);

	const formattedContent: string[] = text.split(/\n/);

	const handleTextChange = (event: ChangeEvent<HTMLDivElement>) => {
		let eventHTML = event.target.innerHTML;
		set(contentRef, eventHTML);
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

	const onBackButtonClick = () => {
		navigate("/home");
	};

	return (
		<>
			<div
				id="text-editor-container"
				style={{
					height: "calc(100vh - 50px)",
					overflowY: "auto",
					scrollbarGutter: "stable",
					marginLeft: "5px",
				}}
			>
				<button
					className="btn btn-white border-black"
					style={{
						position: "absolute",
						left: 10,
						top: 60,
					}}
					onClick={onBackButtonClick}
				>
					{"<"}
				</button>
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
						ref={titleEditorRef}
						dangerouslySetInnerHTML={{ __html: title }}
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
						dangerouslySetInnerHTML={{ __html: text }}
						onInputCapture={handleTextChange}
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
				<textarea name="textarea" id=""></textarea>
			</div>
		</>
	);
};

export default TextEditor;
