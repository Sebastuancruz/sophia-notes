"use client";
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import TipTapMenuBar from "./TipTapMenuBar";
import { Button } from "./ui/button";
import { MainButton } from "./ui/mainButton";
import { useDebounce } from "@/lib/useDebounce";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { NoteType } from "@/lib/db/schema";
import Text from '@tiptap/extension-text'
import { text } from "stream/consumers";

type Props = {note: NoteType};

const TipTapEditor = ({note}: Props) => {
  const [editorState, setEditorState] = React.useState(note.editorState || `<h1>${note.name}</h1>`);
  const saveNote = useMutation({
    mutationFn: async () =>{
      const response = await axios.post('/api/saveNote',{
        noteId: note.id,
        editorState
      })
      return response.data
    }
  })

  const customText = Text.extend({
    addKeyboardShortcuts(){
      return{
        'Shift-a': () => {
          console.log('Shortcut')
          return true;
        }
      }
    }
  })

  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit, customText],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });

  
  const [isSaving, setIsSaving] = React.useState(false)
  const debouncedEditorState = useDebounce(editorState, 500)
  
  React.useEffect(()=>{
    if(debouncedEditorState === '') return;
      saveNote.mutate(undefined, {
        onSuccess: data => {
          console.log('succes update', data)
        }, 
        onError: err => {
          console.log(err)
        },
      });
    console.log(debouncedEditorState)
  },[debouncedEditorState])

  return (
    <>
      <div className="flex">
           {editor &&  <TipTapMenuBar editor={editor}/>}
            <MainButton disabled variant={"outline"}>
              {saveNote.isPending ? "Saving..." : "Saved"}
            </MainButton>
      </div>
        <div className="prose">
          <EditorContent editor={editor} />
        </div>
     
    </>
  );
};

export default TipTapEditor;
