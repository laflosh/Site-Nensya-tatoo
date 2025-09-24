export function popupMain(){

    showPopUp()

    let buttonPopUp = document.getElementById("close-popup")

    closePopUpForClickOutsidePopUp()

    buttonPopUp.addEventListener("click", (event) => {

        closePopUp()

    })

}

//On load of the form page show the popup with message
function showPopUp(){

    document.addEventListener("DOMContentLoaded", (event) =>{

        let popUp = document.getElementById("onload-popup")

        popUp.setAttribute("aria-hidden", false)
        popUp.style.display = null;

    })

}

//Close popup after click on close button
function closePopUp(){

    let popUp = document.getElementById("onload-popup")

    popUp.setAttribute("aria-hidden", true)
    popUp.style.display = "none"

}

//close popup after click utside the popup div
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