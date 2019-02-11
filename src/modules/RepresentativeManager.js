
const url = "https://www.googleapis.com/civicinfo/v2/representatives";
let apiKey = "key=AIzaSyAF3M0uelGbxyrv6QuVqrHcfFxM3a3nelc";
const address = "405%20North%20Jefferson%20St.%20Winchester%20Tennessee";


export default {

    // ****************************OFFICES****************************
    getAllOffices() {
        return fetch(`${url}?address=${address}&${apiKey}`).then(r => r.json())
    },

    getAllFederalOffices() {
        return fetch(`${url}?levels=country&address=${address}&${apiKey}`).then(r => r.json())
    },

    getAllStateOffices() {
        return fetch(`${url}?levels=administrativeArea1&address=${address}&${apiKey}`).then(r => r.json())
    },

    // ****************************OFFICIALS****************************

    getAllOfficials() {
        return fetch(`${url}?address=${address}&${apiKey}`).then(r => r.json())
    }


}