import React from "react";

type props = {
    note: string,
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>,
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Note: React.FC<props> = ({note,handleClick, handleChange}) => {

    return (
        <form style={{width: 500}}>
            <textarea className="form-control" rows={3} value={note} onChange={handleChange}></textarea>
            <button className="btn btn-info" onClick={handleClick}>Send Note</button>
        </form>
    )
}