import React from "react";
import uuid from "react-uuid";
import {note} from "../fetch/post.fetch";

type props = {
    notes: note[],
    handleDelete: (id: number) => void
}

export const Notes: React.FC<props> = ({notes, handleDelete}) => {
    return (
        <div className="card-body">
            {notes.map((note: note) => (
                <div key={uuid()}>
                    <span className="card-text">{note.content}    </span>
                    <button className="btn btn-danger" onClick={() => handleDelete(note.id)}>delete</button>
                </div>
            ))}
        </div>
    )
}