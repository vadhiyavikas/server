const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);

    return res.status(200).json({ msg: "Message sent successfully!!" });
  } catch (error) {
    console.error(error, "error");
    return res.status(500).json({ msg: "Message not deliver!!" });
  }
};

module.exports = contactForm;
