//set element in localstorage with the pair key/element
export  function saveElementInLocalStorage(key, data){

    localStorage.setItem(key, JSON.stringify(data))

}

export function getElementInLocalstorage(key){

    localStorage.getItem(key)

}

//remove an element in the localstorage with key
export function removeElementInLocalStorage(key){

    let data = localStorage.removeItem(key)

    return JSON.parse(data)

}

//create a new URL for an generic redirection fonction
export function redirection(path){

    const target = new URL(path, window.location.href)

    let url = target.href

    window.location.assign(url)

}

//function to create a delay between actions
export function debounce(fn, time){

    let timeout

    return (...args) => {

        clearTimeout(timeout)
        timeout = setTimeout(() => fn(...args), time)

    }

}