"use client";
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import TipTapMenuBar from "./TipTapMenuBar";
import { Button } from "./ui/button";
import { MainButton } from "./ui/mainButton";

type Props = {};

const TipTapEditor = (props: Props) => {
  const [editorState, setEditorState] = React.useState("");

  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });

  

  // React.useEffect

  return (
    <>
      <div className="flex">
           {editor &&  <TipTapMenuBar editor={editor}/>}
            <MainButton>Saved</MainButton>
      </div>
        <div className="prose">
          <EditorContent editor={editor} />
        </div>
     
    </>
  );
};

export default TipTapEditor;
