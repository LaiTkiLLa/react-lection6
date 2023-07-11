export type note = {
    id: number,
    content: string
}

export const post = async (body: note) => {
    try {
        return fetch('http://localhost:7070/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        })
    }catch (error){
        throw error
    }
}