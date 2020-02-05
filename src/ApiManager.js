const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/question/${id}`).then(result => result.json())
    },

    getFunny() {
        return fetch(`${remoteURL}/question?categoryId=1`).then(result => result.json())
    },
    getFriendly() {
        return fetch(`${remoteURL}/question?categoryId=3`).then(result => result.json())
    },
    getFlirty() {
        return fetch(`${remoteURL}/question?categoryId=2`).then(result => result.json())
    },
    getPolitical() {
        return fetch(`${remoteURL}/question?categoryId=5`).then(result => result.json())
    },
    getPhilosophical() {
        return fetch(`${remoteURL}/question?categoryId=4`).then(result => result.json())
    },
    getInterview() {
        return fetch(`${remoteURL}/question?categoryId=6`).then(result => result.json())
    },
    getNetworking() {
        return fetch(`${remoteURL}/question?categoryId=7`).then(result => result.json())
    },
}