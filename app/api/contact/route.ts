// import type { NextApiRequest, NextApiResponse } from "next";

// function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { email, name, message } = req.body;

//     if (
//       !email ||
//       !email.includes("@") ||
//       !name ||
//       !message ||
//       name.trim() === "" ||
//       message.trim() === ''
//     ) {
//       return res.status(422).json({ message: "Invalid input." });
//     }

//     //store in db 
//      const newMessage  = {
//         email, 
//         name, 
//         message

//      };
//      console.log(newMessage) ; 

//     return res.status(201).json({
//       message: "Message received successfully!",
//       data: { email, name, message },
//     });
//   }

// }

// export default handler;

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

  console.log(newMessage);

  return NextResponse.json(
    {
      message: "Message received successfully!",
      data: newMessage,
    },
    { status: 201 }
  );
}

