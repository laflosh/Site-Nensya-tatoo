export function popupMain(){

    showPopUp()

    let buttonPopUp = document.getElementById("close-popup")

    closePopUpForClickOutsidePopUp()

    buttonPopUp.addEventListener("click", (event) => {

        closePopUp()

    })

}

function showPopUp(){

    document.addEventListener("DOMContentLoaded", (event) =>{

        let popUp = document.getElementById("onload-popup")

        popUp.setAttribute("aria-hidden", false)
        popUp.style.display = null;

    })

}

function closePopUp(){

    let popUp = document.getElementById("onload-popup")

    popUp.setAttribute("aria-hidden", true)
    popUp.style.display = "none"

}

function closePopUpForClickOutsidePopUp(){

    let popUp = document.getElementById("onload-popup")

    document.addEventListener("click", (event) => {

        if(!popUp.contains(event.target)){

            closePopUp()
        }

    })

    popUp.addEventListener("click", (event) =>{

        event.stopPropagation()

    })

}