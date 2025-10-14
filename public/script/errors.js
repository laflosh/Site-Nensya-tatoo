export function showErrorMessage(input, message){

    clearErrorMessage(input)

    const errorMessage = document.createElement("div")

    errorMessage.classList.add("error-message")
    errorMessage.textContent = message

    input.insertAdjacentElement("afterend", errorMessage)
    input.classList.add("input-error")

}

export function clearErrorMessage(input){

    input.classList.remove("input-error")

    const errorMessage = input.nextElementSibling

    if(errorMessage && errorMessage.classList.contains("error-message")){

        errorMessage.remove()

    }

}