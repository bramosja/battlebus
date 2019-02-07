const remoteUrl="http://localhost:5002"

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

    //**********************SAVED*POLITICIANS*********************

    getAllSavedPoliticians() {
        return fetch(`${remoteUrl}/savedPoliticians`).then(r => r.json())
    },

    // *************************NOTES*************************

    getAllNotes() {
        return fetch(`${remoteUrl}/notes`).then(r => r.json())
    },

    postNote(note){
        return fetch(`${remoteUrl}/notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        }).then(r => r.json())
    },
}