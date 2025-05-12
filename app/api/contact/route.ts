import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, name, message } = await req.json();

  if (
    !email ||
    !email.includes("@") ||
    !name ||
    !message ||
    name.trim() === "" ||
    message.trim() === ""
  ) {
    return NextResponse.json({ message: "Invalid input." }, { status: 422 });
  }

  const newMessage = {
    email,
    name,
    message,
  };

  let client;

  try {
    client = await MongoClient.connect(
      "mongodb+srv://pooja29:pooja29@cluster0.34b6plz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Could not connect to database." },
      { status: 500 }
    );
  }

  try {
    const db = client.db('blog-app');
    const result = await db.collection("messages").insertOne(newMessage);
    // newMessage._id = result.insertedId;
  } catch (error) {
    client.close();
    return NextResponse.json(
      { message: "Failed to store message!" },
      { status: 500 }
    );
  }

  client.close();

  return NextResponse.json(
    {
      message: "Message received successfully!",
      data: newMessage,
    },
    { status: 201 }
  );
}
