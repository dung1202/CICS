import { getDataFromDoc, getDatafromDocs } from "./uitil.js"
// read one (lay 1 ban ghi tren firebase ve)
import './userinfo.js'

// async await  cong thoi gian
async function getOneDucument() {
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
async function getManyDocument() {
    const res = await firebase.firestore().collection('users')
    .where('tuoi', '==', '21') // điều kiện lấy về
    .get()
    // const user = getDataFromDoc(res.docs[0])
    // console.log(user)
    const user = getDatafromDocs(res)
    return user
}
// khi nao getManyDocument() thi thuc hien ham trong then()
getManyDocument().then(res => {
    
    let html = ``
    for (const item of res) {
        html += `<user-info name='${item.name}'></user-info>`
    }
    document.getElementById('app').innerHTML = html
})

// giải thích điều kiện where
// array-contains: khi kiểm tra trong mảng có bằng 1 giá trị hay không (điều kiện 1 giá trị)

// array-contains-any: khi kiểm tra trong mảng có bằng 1 giá trị hay không (điều kiện mảng giá trị)

// in: 
// not-in:

// add document
function addDocument()
{
    const data =
    {
        name: 'nguyen van e',
        phone: 21,
    }
    firebase.firestore().collection('users').add(data)
}
// addDocument()

// update
function updateDocument()
{
    const docId='KGn6DCKoxvajgCya7l4J'
    const data =
    {
        name: 'Nguyen Van F',
        phone: firebase.firestore.FieldValue.arrayUnion('789432768') // thêm thẳng vào array
    }
    firebase.firestore().collection('users').doc(docId).update(data)
}
updateDocument()

// delete document (không hay dùng, thay trạng thái bằng update)
function deleteDocumnet()
{
    const docId='uDEiysYi9HKYOpW318vY'
    firebase.firestore().collection('users').doc(docId).delete()
}
deleteDocumnet()