//set element in localstorage with the pair key/element
export  function saveElementInLocalStorage(key, data){

    localStorage.setItem(key, JSON.stringify(data))

}

export function getElementInLocalstorage(key){

    let data = localStorage.getItem(key)
    return JSON.parse(data)

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

//function to create a delay between actions
export function debounce(fn, time = 200){

    let timeout

    return (...args) => {

        clearTimeout(timeout)
        timeout = setTimeout(() => fn(...args), time)

    }

}