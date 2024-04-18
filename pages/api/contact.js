import { mailOptions, transporter } from "../../config/nodemailer.js";

// const handler = async (req, res) => {
//     console.log(req.body);

//     if(req.method === "POST") {
//         const data = req.body;
//         if (!data.name || !data.email || !data.message) {
//             return res.status(400).json({ message: "Bad request" });
//         }

//         try {
//             await transporter.sendMail({
//                 ...mailOptions,
//                 subject: data.name + " would like to reach out to you",
//                 html: "Message from <b>" + data.name + "</b> - " + data.email + "<br/><br/>" + data.message
//             });

//             return res.status(200).json({ success: true });
//         } catch (error) {
//             console.log(error);
//             res.status(400).json({ message: error.message })
//         }
//     }
//     res.status(400).json({ message: "Bad request" })
// };

const handler = async (req, res) => {
    const data = req.body;

    const mailData = {
        ...mailOptions,
        subject: data.name + " would like to reach out to you",
        html: "Message from <b>" + data.name + "</b> - " + data.email + "<br/><br/>" + data.message
    };

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        })
    })

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
                
            }
        })
    })

    return res.status(200).json({ success: true });
}

export default handler;