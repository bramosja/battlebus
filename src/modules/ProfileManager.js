const remoteUrl="http://localhost:5002";

export default {

    // get all politicians for a specific user
    getAllUserPoliticians(userId) {
        return fetch(`${remoteUrl}/users/${userId}?_embed=savedPoliticians`).then(r => r.json())
    },

    deletePolitician(id) {
        return fetch(`${remoteUrl}/savedPoliticians/${id}`, {
            method: "DELETE"
        })
    },

    // *************************USERS*************************

    getAllUsers() {
        return fetch(`${remoteUrl}/users`).then(r => r.json())
    },

    getUser(userId) {
        return fetch(`${remoteUrl}/users/${userId}`).then(r => r.json())
    },

    // *************************NOTES*************************

    getAllSavedPoliticianNotes(politicianId) {
        return fetch(`${remoteUrl}/savedPoliticians/${politicianId}?_embed=notes`).then(r => r.json())
    },

    addNewNote(noteObject){
        return fetch(`${remoteUrl}/notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteObject)
        })
    },

    editNote(noteObject){
        return fetch(`${remoteUrl}/notes/${noteObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteObject)
        })
    },

    deleteNote(id) {
        return fetch(`${remoteUrl}/notes/${id}`, {
            method: "DELETE"
        })
    }
}