//open the loading modal during an action
export function openLoadingModal(){

    let modal = getLoadingModalBlock()

    modal.setAttribute("aria-hiden", false)
    modal.style.display = null
 
}

//close the loading modal after the confirmation of an action
export function closeLoadingModal(){

    let modal = getLoadingModalBlock()

    modal.setAttribute("aria-hiden", true)
    modal.style.display = "none"

}

//get the div for the loading modal
function getLoadingModalBlock(){

    let modal = document.getElementById("loadingModal")

    return modal

}