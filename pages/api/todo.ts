import type { NextApiRequest, NextApiResponse } from "next";
import Todo from "../../models/todo";
import dbConnect from "../../db";

// interface ITodo {
//   name: string
//   isCompleted: boolean
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET": {
      try {
        const todos = [];
        res.status(200).json(todos);
      } catch (error) {
        res.status(500).json({ message: "Error fetching todos" });
      }
      break;
    }

    case "POST": {
      try {
        res.status(201).json({ message: "Successfully add new todo" });
      } catch (error) {
        res.status(500).json({ message: "Error creating todo" });
      }
      break;
    }

    case "PUT": {
      try {
        res.status(201).json({ message: "Successfully update todo" });
      } catch (error) {
        res.status(500).json({ message: "Error creating todo" });
      }
      break;
    }

    case "DELETE": {
      try {
        res.status(201).json({ message: "Successfully update todo" });
      } catch (error) {
        res.status(500).json({ message: "Error creating todo" });
      }
      break;
    }

    default: {
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).json({ message: `Method ${method} not allowed` });
    }
  }
}
