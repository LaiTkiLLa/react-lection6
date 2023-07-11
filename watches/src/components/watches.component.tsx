import uuid from "react-uuid"
import { useEffect, useState } from  'react'
import { Button } from "./button.component"

export type Watch = {
    watches: {
        name: string,
        timeZone: string,
    }[],
    handleDelete: (name: string) => void
}

export const Watches: React.FC<Watch> = ({watches, handleDelete}) => {
    const [time, setTime] = useState<any>(new Date())

    useEffect(() => {
        const clock = setInterval(() => setTime(new Date()), 1_000)
        return () => clearInterval(time);
    }, [])

    const getTime = (timeZone: string) => {
        const minutes = new Date(new Date().toLocaleString("en-US", {timeZone})).getMinutes()
        const seconds = new Date(new Date().toLocaleString("en-US", {timeZone})).getSeconds()
        const hours = new Date(new Date().toLocaleString("en-US", {timeZone})).getHours()
        return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }

    return (
        <div>
            {!watches.length
            ? <div>Добавьте часы</div>
            : watches.map((watch) => (
                <div key={uuid()}>
                    <span>{watch.name}  </span>
                    <span>{getTime(watch.timeZone)}</span>
                    <Button className='btn btn-danger' title='Удалить' onClick={() => handleDelete(watch.name)}/>
                </div>
            ))}
        </div>
    )
}