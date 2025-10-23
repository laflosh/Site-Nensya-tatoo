import {debounce, saveElementInLocalStorage, removeElementInLocalStorage, getElementInLocalstorage, redirection} from "../utils.js"
import {openLoadingModal, closeLoadingModal} from "./loadingModalForm.js"
import {checkDataValidation} from "../validate.js"

export function formMain(){

    restoreSavedForm()
    checkRadioValueSelected()
    saveFormState()
    submitFormData()

}

//submit the data from the form to backend for sending mail with all data
function submitFormData(){

    let buttonSubmit = document.getElementById("sendForm")

    buttonSubmit.addEventListener("click", (event) => {

        event.preventDefault()

        let dataForm = getDataFromForm()

        console.log(dataForm)

        if(!checkDataValidation(dataForm)){
            console.warn("Invalid data in form")
            return
        }

        removeElementInLocalStorage("dataForm")

        openLoadingModal()

        setTimeout(() => {

            closeLoadingModal()
            redirection("/public/confirmation.html")

        }, 3000)

    })

}

//Get all the data for each section in the form to create a object and return it
function getDataFromForm(){

    //personnal information section
    let name = document.getElementById("name")
    let firstName = document.getElementById("firstName")
    let birthDate = document.getElementById("birthDate")
    let phoneNumber = document.getElementById("phone")
    let email = document.getElementById("email")
    let instagram = document.getElementById("instagram")

    //information about project section
    let firstTatoo = checkBoutonRadionChecked(document.getElementsByName("firstTatoo"))
    let projectDescription = document.getElementById("projectDescription")
    let bodyLocation = document.getElementById("bodyLocation")
    let heightTatoo = document.getElementById("heightTatoo")
    let tatooImages = document.getElementById("tatooImage")

    //custumer's disponibilities section
    let disponibilities = document.getElementById("disponibilities")

    //health condition section
    let pregnant = checkBoutonRadionChecked(document.getElementsByName("pregnant"))
    let treatment = checkBoutonRadionChecked(document.getElementsByName("treatments"))
    let whatTreatment = null
    if(treatment == "oui"){
        whatTreatment = document.getElementById("whatTreatments")
    }
    let allergies = document.getElementById("allergies")
    let skinDiseases = checkBoutonRadionChecked(document.getElementsByName("skinDiseases"))
    let whatSkinDiseases = null
    if(skinDiseases == "oui"){
        whatSkinDiseases = document.getElementById("whatSkinDiseases")
    }
    let chronicDiseases = document.getElementById("chronicDiseases")
    let tatooComplications = checkBoutonRadionChecked(document.getElementsByName("tatooComplication"))
    let whatTatooComplications = null
    if(tatooComplications == "oui"){
        whatTatooComplications = document.getElementById("whatTatooComplication")
    }

    //Construction of the object with all data inside
    let dataForm = {
        "name" : name.value,
        "firstName" : firstName.value,
        "birthDate" : birthDate.value,
        "phoneNumber" : phoneNumber.value,
        "email" : email.value,
        "instagram" : instagram.value,
        "firstTatoo" : firstTatoo,
        "projectDescription" : projectDescription.value,
        "bodyLocation" : bodyLocation.value,
        "heightTatoo" : heightTatoo.value,
        "tatooImages" : tatooImages.value,
        "disponibilities" : disponibilities.value,
        "pregnant" : pregnant,
        "treatments" : treatment,
        ...(whatTreatment ? {"whatTreatment" : whatTreatment.value} : {}),
        "allergies" : allergies.value,
        "skinDiseases" : skinDiseases,
        ...(whatSkinDiseases ? {"whatSkinDiseases" : whatSkinDiseases.value} : {}),
        "chronicDiseases" : chronicDiseases.value,
        "tatooComplication" : tatooComplications,
        ...(whatTatooComplications ? {"whatTatooComplications" : whatTatooComplications.value} : {}),
    }

    return dataForm

}

//save element form the form in local for each changement in the form
function saveFormState(){

    const savedDebounce = debounce(saveFormDataInLocalStorage, 300)

    document.querySelectorAll("input, select, textarea").forEach(element => {

        element.addEventListener("input", savedDebounce)
        element.addEventListener("change", savedDebounce)

    })

}

//Function to save the actual data from form in localstorage
function saveFormDataInLocalStorage(){

    const dataForm = getDataFromForm()

    saveElementInLocalStorage("dataForm", dataForm)

}

//Restore the saved form from the lastest state in the localstorage
function restoreSavedForm(){

    const savedData = getElementInLocalstorage("dataForm")

    if(!savedData) return 

    console.log(savedData)

    //Restore static data, with none dynamics elements associeted
    Object.keys(savedData).forEach((key) => {

        const value = savedData[key]
        if(!value) return

        const element = document.querySelector(`input[name="${key}"]`) || document.getElementById(key)
        if(!element) return

        if(element.type == "radio"){
            let btnRadio = document.querySelector(`input[name="${key}"][value="${value}"]`);
            btnRadio.checked = true
        } else if(element.tagName == "SELECT") {
            element.value = value
        } else {
            element.value = value
        }

    })

    const dynamicsRadios = ["treatments", "skinDiseases", "tatooComplication"];

    //Restore dynamics data, specialy for radio bouton, they to show an addionnal input in case of "oui"
    //value to add a dynamic input with data associeted
    dynamicsRadios.forEach( (name) => {
        if(savedData[name]) {
            const radioBtn = document.querySelector(`input[name="${name}"][value="${savedData[name]}"]`)

            if(radioBtn){
                radioBtn.checked = true;
            }
        }
    })

    toggleSkinTreatmentsBlock();
    toggleSkinDiseasesBlock();
    toggleTatooComplicationBlock();

    if(savedData.whatTreatment){
        const input = document.getElementById("whatTreatments")
        if(input) input.value = savedData.whatTreatment
    }

    if(savedData.whatSkinDiseases){
        const input = document.getElementById("whatSkinDiseases")
        if(input) input.value = savedData.whatSkinDiseases
    }

    if(savedData.whatTatooComplications){
        const input = document.getElementById("whatTatooComplication")
        if(input) input.value = savedData.whatTatooComplications
    }

}

//For each radio input, check witch one option is check and return the value
function checkBoutonRadionChecked(radios){

    let selectedValue = null

    for(let radio of radios){

        if(radio.checked){
            selectedValue = radio.value
            break
        }

    }

    return selectedValue

}

//Listenning each radio bouton to know witch one are selected
//to create an addionnal input for more context information in the form
function checkRadioValueSelected(){

    //for treatments question
    let treatments = document.getElementsByName("treatments")

    treatments.forEach(radio => {
        radio.addEventListener("change", (event) => toggleSkinTreatmentsBlock())
    })

    document.addEventListener("DOMContentLoaded", (event) => toggleSkinTreatmentsBlock())

    //for skin diseases question
    let skinDiseases = document.getElementsByName("skinDiseases")

    skinDiseases.forEach(radio => {
        radio.addEventListener("change", (event) => toggleSkinDiseasesBlock())
    })

    document.addEventListener("DOMContentLoaded", (event) => toggleSkinDiseasesBlock())

    //for chronic diseases question
    let tatooComplication = document.getElementsByName("tatooComplication")

    tatooComplication.forEach(radio => {
        radio.addEventListener("change", (event) => toggleTatooComplicationBlock())
    })

    document.addEventListener("DOMContentLoaded", (event) => toggleTatooComplicationBlock())

}

function toggleSkinTreatmentsBlock(){

    let skinTreatmentsFielset = document.getElementById("treatments")
    let existingDiv = document.getElementById("skinTreatmentsBlock")
    let selected = document.querySelector('input[name="treatments"]:checked')

    if(selected && selected.value === "oui"){

        if(!existingDiv){

            let divBlock = document.createElement("div")
            let inputText = document.createElement("input")
            let label = document.createElement("label")

            divBlock.setAttribute("id", "skinTreatmentsBlock");

            inputText.setAttribute("type", "text")
            inputText.setAttribute("name", "whatTreatments")
            inputText.setAttribute("id", "whatTreatments")
            inputText.required = true

            label.setAttribute("for", "whatTreatments")
            label.textContent = "Préciser lequel : "

            divBlock.appendChild(label)
            divBlock.appendChild(inputText)

            skinTreatmentsFielset.appendChild(divBlock)
        }

    } else if(selected && selected.value === "non"){

        if(existingDiv){

            existingDiv.remove()

        }

    }

}

function toggleSkinDiseasesBlock(){

    let skinDiseasesFielset = document.getElementById("skinDiseases")
    let existingDiv = document.getElementById("skinDiseasesBlock")
    let selected = document.querySelector('input[name="skinDiseases"]:checked')

    if(selected && selected.value === "oui"){

        if(!existingDiv){

            let divBlock = document.createElement("div")
            let inputText = document.createElement("input")
            let label = document.createElement("label")

            divBlock.setAttribute("id", "skinDiseasesBlock");

            inputText.setAttribute("type", "text")
            inputText.setAttribute("name", "whatSkinDiseases")
            inputText.setAttribute("id", "whatSkinDiseases")
            inputText.required = true

            label.setAttribute("for", "whatSkinDiseases")
            label.textContent = "Préciser lequel : "

            divBlock.appendChild(label)
            divBlock.appendChild(inputText)

            skinDiseasesFielset.appendChild(divBlock)
        }

    } else if(selected && selected.value === "non"){

        if(existingDiv){

            existingDiv.remove()

        }

    }

}

function toggleTatooComplicationBlock(){

    let tatooComplicationFielset = document.getElementById("tatooComplication")
    let existingDiv = document.getElementById("tatooComplicationBlock")
    let selected = document.querySelector('input[name="tatooComplication"]:checked')

    if(selected && selected.value === "oui"){

        if(!existingDiv){

            let divBlock = document.createElement("div")
            let inputText = document.createElement("input")
            let label = document.createElement("label")

            divBlock.setAttribute("id", "tatooComplicationBlock");

            inputText.setAttribute("type", "text")
            inputText.setAttribute("name", "whatTatooComplication")
            inputText.setAttribute("id", "whatTatooComplication")
            inputText.required = true

            label.setAttribute("for", "whatTatooComplication")
            label.textContent = "Préciser lequel : "

            divBlock.appendChild(label)
            divBlock.appendChild(inputText)

            tatooComplicationFielset.appendChild(divBlock)
        }

    } else if(selected && selected.value === "non"){

        if(existingDiv){

            existingDiv.remove()

        }

    }

}