export function getDataFromDoc(doc) {
    const data = doc.data()
    data.id = doc.id
    return data
}

export function getDatafromDocs(data) {
    return data.docs.map(getDataFromDoc)
}

