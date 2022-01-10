import { password, username } from "../../constants/credentials";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (!email || !validateEmail(email) || !name || !name.trim() === "" || !message || !message.trim() === "") {
      res.status(400).json({ message: "Invalid input", error: true });
      return;
    }

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to database failed", error: true });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    try {
      await insertDocument(client, newMessage);
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed", error: true });
    }
    res.status(200).json({ success: true, message: "Your message is successfully stored." });
  }
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.5rv5l.mongodb.net/messages?retryWrites=true&w=majority`
  );
  return client;
}

async function insertDocument(client, data) {
  const db = client.db();
  await db.collection("contacts").insertOne({ ...data });
}
