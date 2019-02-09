const remoteUrl="http://localhost:5002";

export default {

    // get all politicians for a specific user
    getAllUserPoliticians(userId) {
        return fetch(`${remoteUrl}/users/${userId}?_embed=savedPoliticians`).then(r => r.json())
    },

    getAllSavedPoliticianNotes(politicianId) {
        return fetch(`${remoteUrl}/savedPoliticians/${politicianId}?_embed=notes`).then(r => r.json())
    },

    // *************************USERS*************************

    getAllUsers() {
        return fetch(`${remoteUrl}/users`).then(r => r.json())
    },

    // *************************NOTES*************************
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

    }
}