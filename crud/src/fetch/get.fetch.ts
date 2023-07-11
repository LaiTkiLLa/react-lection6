import {note} from "./post.fetch";

export const get = async (): Promise<note[]> => {
    try {
        const response = await fetch('http://localhost:7070/notes')
        return response.json()
    }catch (error){
            throw error
    }
}