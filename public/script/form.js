export function formMain(){

    submitFormData()

}

//submit the data from the form to backend for sending mail with all data
function submitFormData(){

    let buttonSubmit = document.getElementById("sendForm")

    buttonSubmit.addEventListener("click", (event) => {

        event.preventDefault()

        let dataForm = getDataFromForm()

        console.log(dataForm)

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
        ...(whatTatooComplications ? {"whatTatooComplications" : whatSkinDiseases.value} : {}),
    }

    return dataForm

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