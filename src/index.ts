import express, { Request, Response } from "express";
import userRouter from "./router/user/user";
import { Db, MongoClient } from "mongodb";
import { Send } from "lucide-react";
const { todoRouter } = require(`./router/todo-app/todos.router`);
const app = express();
const port = 3001;
app.use(express.json());

// app.get("/", (req: Request, res: Response) => {
//   //   res.send("users");
//   res.send("hii");
// });
// app.use("/", userRouter);
// app.use("/todos", todoRouter);
let db: Db;
const url =
  "mongodb+srv://odkhuubymbajav06:v59VqE30urS1wXPP@first.josq7nj.mongodb.net/";

const connectDb = async () => {
  try {
    const client = new MongoClient(url);
    db = client.db("sample_mflix");
    console.log("LALALALAALALAALALLA");

    return client;
  } catch (error) {
    return error;
  }
};

app.get("/", async (req: Request, res: Response) => {
  const responses = await db.collection("users").find();
  const users = await responses.toArray();
  console.log(users);

  res.json(users);
});

app.post("/addUser", async (req:Request,res:Response)=>{
    const response=db
    .collection("users")
    .insertOne({name:"bataa",age:25,  email: "bataa@example.com"})
    res.json((await response).insertedId.getTimestamp())
});

app.listen(port, async () => {
  await connectDb();

  console.log(`http://localhost:${port}`);
});
// authentication

// user create -> name, age, userName(unique), userEmail, phoneNumber, password
// user login -> userName, password
// user delete -> userId eer ustgana
// user update -> userId eer ni update
// get user by id -> userId aar zowhon neg useriin medeelel awna.

// fs-extra gdeg dependency ashiglana.
