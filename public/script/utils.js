export  function saveElementInLocalStorage(key, data){

    localStorage.setItem(key, JSON.stringify(data))

}

export function removeElementInLocalStorage(key){

    localStorage.removeItem(key)

}