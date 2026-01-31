import mail from 'nodemailer'

async function kirimken(subj, teks, mails) {
    const kirimnih = mail.createTransport({
        service:"gmail",
        auth:{
            user:"rakapanggalih@gmail.com",
            pass:"gbqsmutlwhquinoi"
        }

    })
    const yayaya = kirimnih.sendMail({
        from:"noreply",
        to:mails,
        subject:subj,
        text:teks
    })
}

export default kirimken