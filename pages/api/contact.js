// const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  // only allow get request
  if (req.method !== "POST") {
    return res.status(405);
  }

  // // try get request, if successful return response, otherwise return error message
  try {
    // require("dotenv").config();

    let nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "moundcontactinfo@gmail.com",
        pass: process.env.PASSWORD,
      },
      secure: true,
    });

    // const transporter = nodemailer.createTransport({
    //   port: 465,
    //   host: "smtp.gmail.com",
    //   auth: {
    //     user: "moundcontactinfo@gmail.com",
    //     pass: process.env.PASSWORD,
    //   },
    //   secure: true,
    // });

    const mailData = {
      from: "moundcontactinfo@gmail.com",
      to: "stefanslombard@gmail.com",
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`,
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    res.send("success");
  } catch (err) {
    console.error(err);

    res.status(500).json({ msg: "Something went wrong." });
  }
}
