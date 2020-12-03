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

