const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.sendFormMail = async (data) => {

    const payLoad = {
        from: process.env.SENDGRID_FROM_EMAIL,
        replyTo: data.email,
        to: process.env.RECIPIENT_EMAIL,
        subject: "Nouveau formulaire de tatouage",
        html: `
            <h1>Nouveau formualire de demande projet ! </h1>
            <p><b>Nom :</b> ${data.name}</p>
            <p><b>Prénom :</b> ${data.firstName}</p>
            <p><b>Date de naissance :</b> ${data.birthdate}</p>
            <p><b>Numéro de téléphone :</b> ${data.phoneNumber}</p>
            <p><b>Email :</b> ${data.email}</p>
            <p><b>Premier tatoo ?</b> ${data.firstTatoo}</p>
            <p><b>Description du projet :</b><br/> ${data.projectDescription}</p>
            <p><b>Localisation sur le corps :</b> ${data.bodyLocation}</p>
            <p><b>Taille du tatoo :</b> ${data.heightTatoo}</p>
            <p><b>Disponibilités :</b> ${data.disponibilities}</p>
            <p><b>Enceinte ?</b> ${data.pregnant}</p>
            <p><b>Traitement ?</b> ${data.treatments}</p>
            <p><b>Quels traitements ?</b> ${data.whatTreatment}</p>
            <p><b>Allergies ?</b> ${data.allergies}</p>
            <p><b>Problèmes de peau ?</b> ${data.skinDiseases}</p>
            <p><b>Quelles problèmes de peau ?</b> ${data.whatSkinDiseases}</p>
            <p><b>Maladies chroniques ?</b> ${data.chronicDiseases}</p>
            <p><b>Complication tatouage ?</b> ${data.tatooComplication}</p>
            <p><b>Quelles complications ?</b> ${data.whatTatooComplications}</p>
        `,
    }

    await sgMail.send(payLoad);

}