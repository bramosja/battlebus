const externalApiUrl = "https://www.googleapis.com/civicinfo/v2/representatives";
const jsonUrl = "http://localhost:5002"
let apiKey = "key=AIzaSyAF3M0uelGbxyrv6QuVqrHcfFxM3a3nelc";

export default {

    // ****************************OFFICES****************************
    getAllOffices() {
        let address = sessionStorage.getItem("address");
        return fetch(`${externalApiUrl}?address=${address}&${apiKey}`).then(r => r.json())
    },

    getAllFederalOffices() {
        let address = sessionStorage.getItem("address");
        return fetch(`${externalApiUrl}?levels=country&address=${address}&${apiKey}`).then(r => r.json())
    },

    getAllStateOffices() {
        let address = sessionStorage.getItem("address");
        return fetch(`${externalApiUrl}?levels=administrativeArea1&address=${address}&${apiKey}`).then(r => r.json())
    },

    // ****************************OFFICIALS****************************

    getAllOfficials() {
        let address = sessionStorage.getItem("address");
        return fetch(`${externalApiUrl}?address=${address}&${apiKey}`).then(r => r.json())
    },

    saveOfficial(officialObject) {
        return fetch(`${jsonUrl}/savedPoliticians`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(officialObject)
        })
    }


}