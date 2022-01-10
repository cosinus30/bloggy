export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (!email || !validateEmail(email) || !name || !name.trim() === "" || !message || !message.trim() === "") {
      res.status(400).json({ message: "Invalid input", error: true });
      return;
    }
    //TODO store it in a database
    const newMessage = {
        email,
        name,
        message
    }
    console.log(newMessage)
    res.status(200).json({ success: true, message: "Successfully stored the message!" });

  }
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
