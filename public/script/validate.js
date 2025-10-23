import {showErrorMessage, clearErrorMessage} from "./errors.js"

//functions to validate all the required data in the form
//return a specific message depending of the error to inform the user
export function checkDataValidation(data){

    if(!data) return

    let valid = true;
    
    if(!validateName(data.name)) valid = false
    if(!validateFirstName(data.firstName)) valid = false

    return valid

}

function validateName(name) {

    const input = document.getElementById("name")

    if(!name || name.trim().length < 2 ){

        showErrorMessage(input, "Le nom doit contenir au moins 2 caractères.")
        return false

    }

    clearErrorMessage(input)
    return true

}

function validateFirstName(firstName) {

    const input = document.getElementById("firstName")

    if(!firstName || firstName.trim().length < 2 ){

        showErrorMessage(input, "Le prénom doit contenir au moins 2 caractères.")
        return false

    }

    clearErrorMessage(input)
    return true

}