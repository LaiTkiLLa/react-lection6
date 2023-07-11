import React, {useEffect, useState} from 'react';
import './App.css';
import {Notes} from "./components/notes.component";
import {get} from "./fetch/get.fetch";
import {Note} from "./components/note.component";
import {note, post} from "./fetch/post.fetch";
import {deleteNote} from "./fetch/delete.fetch";

function App() {
    const [notes, setNotes] = useState<note[]>([])
    const [note, setNote] = useState<string>('')

    const handleClick = async (): Promise<void> => {
        const response = await get()
        setNotes(response)
    }

    useEffect( () => {
        const fetchData = async () => {
            const data = await get()
            setNotes(data)
        };
        fetchData();
    }, [])

    const handlePost = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault()
        setNote('')
        await post({id: notes.length + 1, content: note})
        const response = await get()
        setNotes(response)
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        e.preventDefault()
        setNote(e.target.value)
    }

    const handleDelete = async (id: number): Promise<void> => {
        await deleteNote(id)
        const data = await get()
        setNotes(data)

    }

    return (
      <>
          <div>
              <span>NOTES</span>
              <button className="btn btn-success" onClick={handleClick}>refresh</button>
          </div>
          <Notes notes={notes} handleDelete={handleDelete}/>
          <Note handleClick={handlePost} handleChange={handleChange} note={note}/>
      </>
  );
}

export default App;
