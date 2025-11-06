
class DataForm {

    name
    firstName
    birthDate
    phoneNumber
    email
    instagram
    firstTatoo
    projectDescription
    bodyLocation
    heightTatoo
    //tatooImages
    disponibilities
    pregnant
    treatments
    whatTreatment
    allergies
    skinDiseases
    whatSkinDiseases
    chronicDiseases
    tatooComplication
    whatTatooComplications

    constructor(data){

        this.name = data.name.trim()
        this.firstName = data.firstName.trim()
        this.birthDate = data.birthDate
        this.phoneNumber = data.phoneNumber
        this.email = data.email
        this.instagram = data.instagram
        this.firstTatoo = data.firstTatoo
        this.projectDescription = data.projectDescription
        this.bodyLocation = data.bodyLocation
        this.heightTatoo = data.heightTatoo
        this.disponibilities = data.disponibilities
        this.pregnant = data.pregnant
        this.treatments = data.treatments
        this.whatTreatment = data.whatTreatment
        this.allergies = data.allergies
        this.skinDiseases = data.skinDiseases
        this.whatSkinDiseases = data.whatSkinDiseases
        this.chronicDiseases = data.chronicDiseases
        this.tatooComplication = data.tatooComplication
        this.whatTatooComplications = data.whatTatooComplications

    }

    get name(){
        return this.name
    }

    set name(value){
        this.name = value
    }

    get firstName(){
        return this.firstName
    }

    set firstName(value){
        this.firstName = value
    }

    get birthdate(){
        return this.birthdate
    }

    set birthDate(value){
        this.birthDate = value
    }

    get phoneNumber(){
        return this.phoneNumber
    }

    set phoneNumber(value){
        this.phoneNumber = value
    }

    get email(){
        return this.email
    }

    set email(value){
        this.email = value
    }

    get instagram(){
        return this.instagram
    }

    set instagram(value){
        this.instagram = value
    }

    get firstTatoo(){
        return this.firstTatoo
    }

    set firstTatoo(value){
        this.firstTatoo = value
    }

    get projectDescription(){
        return this.projectDescription
    }

    set projectDescription(value){
        this.projectDescription = value
    }

    get bodyLocation(){
        return this.bodyLocation
    }

    set bodyLocation(value){
        this.bodyLocation = value
    }

    get heightTatoo(){
        return this.heightTatoo
    }

    set heightTatoo(value){
        this.heightTatoo = value
    }

    get disponibilities(){
        return this.disponibilities
    }

    set disponibilities(value){
        this.disponibilities = value
    }

    get pregnant(){
        return this.pregnant
    }

    set pregnant(value){
        this.pregnant = value
    }

    get treatments(){
        return this.treatments
    }

    set treatments(value){
        this.treatments = value
    }

    get whatTreatment(){
        return this.whatTreatment
    }

    set whatTreatment(value){
        this.whatTreatment = value
    }

    get allergies(){
        return this.allergies
    }

    set allergies(value){
        this.allergies = value
    }

    get skinDiseases(){
        return this.skinDiseases
    }

    set skinDiseases(value){
        this.skinDiseases = value
    }

    get whatSkinDiseases(){
        return this.whatSkinDiseases
    }

    set whatSkinDiseases(value){
        this.whatSkinDiseases = value
    }

    get chronicDiseases(){
        return this.chronicDiseases
    }

    set chronicDiseases(value){
        this.chronicDiseases = value
    }

    get tatooComplication(){
        return this.tatooComplication
    }

    set tatooComplication(value){
        this.tatooComplication = value
    }

    get whatTatooComplications(){
        return this.whatTatooComplications
    }

    set whatTatooComplications(value){
        this.whatTatooComplications = value
    }

}

module.exports = DataForm