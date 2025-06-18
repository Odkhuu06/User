import express, { Request, Response } from "express"
import userRouter from "./router/user/user"
const {todoRouter} =require(`./router/todo-app/todos.router`)
const app = express()
const port = 3000
app.use(express.json())
app.get("/", (req: Request, res: Response) => {
//   res.send("users");
res.send("hii")
});
app.use("/", userRouter)
app.use('/todos', todoRouter)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
    
})
// authentication

// user create -> name, age, userName(unique), userEmail, phoneNumber, password
// user login -> userName, password
// user delete -> userId eer ustgana
// user update -> userId eer ni update
// get user by id -> userId aar zowhon neg useriin medeelel awna.

// fs-extra gdeg dependency ashiglana.