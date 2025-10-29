import {showErrorMessage, clearErrorMessage} from "./errors.js"

//functions to validate all the required data in the form
//return a specific message depending of the error to inform the user
export function checkDataValidation(data){

    if(!data) return

    let valid = true;
    
    if(!validateName(data.name)) valid = false
    if(!validateFirstName(data.firstName)) valid = false
    if(!validateBirthdate(data.birthDate)) valid = false
    if(!validatePhoneNumber(data.phoneNumber)) valid = false
    if(!validateMail(data.mail)) valid = false
    if(!validateProjectDescription(data.projectDescription)) valid = false
    if(!validateBodyLocation(data.bodyLocation)) valid = false
    if(!validateHeightTatoo(data.heightTatoo)) valid = false
    if(!validateDisponibilities(data.disponibilities)) valid = false
    if(!validateRadioGroup("firstTatoo", data.firstTatoo)) valid = false
    if(!validateRadioGroup("pregnant", data.pregnant)) valid = false
    if(!validateRadioGroupWithExtraInput("treatments", data.treatments, data.whatTreatment)) valid = false
    if(!validateRadioGroupWithExtraInput("skinDiseases", data.skinDiseases, data.whatSkinDiseases)) valid = false
    if(!validateRadioGroupWithExtraInput("tatooComplication", data.tatooComplication, data.whatTatooComplications)) valid = false

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

function validateBirthdate(birthDate){

    const input = document.getElementById("birthDate")
    const date = new Date(birthDate)
    const regex = /^\d{4}-\d{2}-\d{2}$/

    if(!birthDate || isNaN(date.getTime()) || !regex.test(birthDate)){

        showErrorMessage(input, "La date saisie est invalide ou pas au bon format, veuillez saisir une date valide.")
        return false

    }

    clearErrorMessage(input)
    return true

}

function validatePhoneNumber(phoneNumber){

    const input = document.getElementById("phone")
    const regex = /^0[1-9](?:\s?\d{2}){4}$/

    if(!phoneNumber || !regex.test(phoneNumber.trim())){

        showErrorMessage(input, "Le numéro de téléphone n'est pas au bon format.")
        return false

    }

    clearErrorMessage(input)
    return true

}

function validateMail(mail){

    const input = document.getElementById("email")
    const regex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/

    if(!mail || regex.test(mail.trim())) {

        showErrorMessage(input, "L'adresse email n'est pas au bon format.")
        return false

    }

    clearErrorMessage(input)
    return true

}

function validateProjectDescription(projectDescription){

    const input = document.getElementById("projectDescription")

    if(!projectDescription || projectDescription.trim().length < 2){

        showErrorMessage(input, "Veuillez détailler votre projet de tatouage.")
        return false

    }

    clearErrorMessage(input)
    return true

}

function validateBodyLocation(bodyLocation){

    const input = document.getElementById("bodyLocation")

    if(!bodyLocation || bodyLocation == ""){

        showErrorMessage(input, "Veuillez sélectionner une partie du corps pour votre tatouage.")
        return false

    }

    clearErrorMessage(input)
    return true

}

function validateHeightTatoo(heightTatoo){

    const input = document.getElementById("heightTatoo")

    if(!heightTatoo || heightTatoo <= 0){

        showErrorMessage(input, "Veuillez choisir une taille pour votre tatouage.")
        return false

    }

    clearErrorMessage(input)
    return true

}

function validateDisponibilities(disponibilities){

    const input = document.getElementById("disponibilities")

    if(!disponibilities || disponibilities.trim().length < 2){

        showErrorMessage(input, "Veuillez préciser vos disponibilités.")
        return false

    }

    clearErrorMessage(input)
    return true

}

function validateRadioGroup(name, radioValue){

    const radios = document.getElementsByName(name)
    const fieldset = document.getElementById(name)

    if(!radioValue){

        showErrorMessage(fieldset, "Veuillez sélectionner une option.")
        return false

    }

    clearErrorMessage(fieldset)
    radios.forEach(r => clearErrorMessage(r))
    return true

}

function validateRadioGroupWithExtraInput(name, radioValue, inputValue){

    if(!validateRadioGroup(name, radioValue)){

        return false

    } else {
    
        const fieldset = document.getElementById(name)
        const extraInput = fieldset.querySelector("input[type='text']")

        if(radioValue == "oui" && (!inputValue || inputValue.trim() == "")){

            showErrorMessage(extraInput, "Merci de précisez votre réponse.")
            return false

        }
        console.log(inputValue)
        clearErrorMessage(fieldset)
        clearErrorMessage(extraInput)
        return true

    }  

}