export function getDataFromDoc(doc) {
    const data = doc.data()
    data.id = doc.id
    return data
}

export function getDatafromDocs(data) {
    return data.docs.map(getDataFromDoc)
}
/**
 * 
 * @param {string} key 
 * @param {object} value 
 */
export function saveToLocalStorege(key, value)
{
    localStorage.setItem(key, JSON.stringify(value))
}

export function getItemToLocalStorege(key)
{
    return JSON.parse   (localStorage.getItem(key))
}

