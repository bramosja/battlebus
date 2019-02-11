
const url = "https://www.googleapis.com/civicinfo/v2/representatives";
let apiKey = "key=AIzaSyAF3M0uelGbxyrv6QuVqrHcfFxM3a3nelc";


export default {
    getAll() {
        let address = "405%20North%20Jefferson%20St.%20Winchester%20Tennessee";
        return fetch(`${url}?address=${address}&${apiKey}`).then(r => r.json())
    },

    getAllFederalOffices() {
        let address = "405%20North%20Jefferson%20St.%20Winchester%20Tennessee";
        return fetch(`${url}?levels=country&address=${address}&${apiKey}`).then(r => r.json())
    },

    getAllStateOffices() {
        let address = "405%20North%20Jefferson%20St.%20Winchester%20Tennessee";
        return fetch(`${url}?levels=administrativeArea1&address=${address}&${apiKey}`).then(r => r.json())
    }


}