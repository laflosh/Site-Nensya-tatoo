const formService = require("../services/formService")
const DataForm = require("../models/dataForm")

exports.handleForm = async (req, res, next) => {

    try{

        const data = new DataForm(req.body)

        for(const element in data){
            console.log(element + " : " + data[element])
        }

        await formService.sendFormMail(data)

        return res.status(200).json({message : "Mail with form data send with success."})

    } catch(e){

        console.error(e)
        res.status(500).json({
            message : "Error during sending the form data.",
            error : e.message
        })

    }

}