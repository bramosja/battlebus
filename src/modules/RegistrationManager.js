const url = "http://localhost:5002/users"

export default {
    addNewUser (newUserObject) {
        return fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserObject)
        })
    }
}