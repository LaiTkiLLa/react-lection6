export const deleteNote = async (id: number) => {
    try {
        return fetch(`http://localhost:7070/notes/${id}`, {
            method: 'DELETE'
        })
    }catch (error){
        throw error
    }

}