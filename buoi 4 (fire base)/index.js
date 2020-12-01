import { getDataFromDoc, getDatafromDocs } from "./uitil.js"
// read one (lay 1 ban ghi tren firebase ve)


 // async await  cong thoi gian
async function getOneDucument()
{
    const res = await firebase.firestore().collection('users').doc('EL2DFTtvXRuHOlI6zvhj').get() 
    const uses = res.data()
    uses.id = res.id
    console.log(res.data())
    console.log(uses)
}

// function getOneDucument()
// {
//     // promise  thoi gian lau nhat(promise.all)
//     // firebase.firestore().collection('users').doc('EL2DFTtvXRuHOlI6zvhj').get()
//     // .then((res) => {
//     //     console.log(res)
//     // })
// }
// getOneDucument()

// get many document
async function getManyDocument()
{
    const res = await firebase.firestore().collection('users').get()
    // const user = getDataFromDoc(res.docs[0])
    // console.log(user)
    const a = getDatafromDocs(res)
    console.log(a)
}

getManyDocument()