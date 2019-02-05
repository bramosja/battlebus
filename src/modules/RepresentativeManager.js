
const url = "https://www.googleapis.com/civicinfo/v2/representatives"
let apiKey = "key=AIzaSyAF3M0uelGbxyrv6QuVqrHcfFxM3a3nelc"

export default {
    getAll(address) {
        return fetch(`${url}?address=${address}&${apiKey}`).then(r => r.json())
    }
}