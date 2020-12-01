export function getDataFromDoc(doc) {
    const data = doc.data()
    data.id = doc.id
    return data
}

export function getDatafromDocs(data) {
    //     const docs = data.docs
    //     const listRes = []
    //     for (let i = 0; i < docs.length; i++) {
    //         listRes.push(getDataFromDoc(docs[i]))
    //     }
    //     return listRes
    return data.docs.map(getDataFromDoc)
}

// demo map
const a = [1, 2, 3, 4]
const b = []

for (const i of a) {
    b.push(i*2)
}

//console.log(b)

const arr2 = a.map(x)
const x = (item) =>
{
    return item*2
}
console.log(arr2)