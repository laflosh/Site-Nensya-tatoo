const nodeMailer = require("nodemailer")

exports.sendFormMail = async (data) => {

    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    })

    const mailOptions = {
        from: `"${data.firstName} ${data.name} <${process.env.SMTP_USER}>"`,
        replyTo: data.email,
        to: process.env.SMTP_USER,
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
            <p><b>
        `,
    }

    await transporter.sendMail(mailOptions);

}