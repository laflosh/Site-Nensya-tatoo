//set element in localstorage with the pair key/element
export  function saveElementInLocalStorage(key, data){

    localStorage.setItem(key, JSON.stringify(data))

}

//remove an element in the localstorage with key
export function removeElementInLocalStorage(key){

    localStorage.removeItem(key)

}

//create a new URL for an generic redirection fonction
export function redirection(path){

    const target = new URL(path, window.location.href)

    let url = target.href

    window.location.assign(url)

}