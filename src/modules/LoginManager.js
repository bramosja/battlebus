const remoteUrl = "http://localhost:5002/users";

export default {
    findUser(userInput, passInput){
        return fetch(`${remoteUrl}?userName=${userInput}&password=${passInput}`)
            .then(r => r.json())
    },

}