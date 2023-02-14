import firebase from './sdk'
const db = firebase.firestore()

export const getTable = async (qry) => {
let data = await db.collection(qry).get()
    data.forEach(doc => {
        return console.log(doc.data())
    });
}