import React, {useState} from "react";
import uuid from 'react-uuid';

type Input = {
    type: string,
    placeholder: string
    value: string | undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    className: string
}

export const Input: React.FC<Input> = (props) => {
    return (
        <input {...props}/>
    )
}