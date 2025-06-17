import express, { Request, Response } from "express"
import fs from "fs-extra"
const app = express()
const port = 3000
app.use(express.json())
app.get("/", (req: Request, res: Response)=>{
    res.send({name: "odhuu", age: 30})
})

app.post("/user", (req: Request, res: Response)=>{
    const {name, age }: {name: string, age: number}= req.body
    res.json({mesagge:`User ${name} is ${age} years old`})
})


app.put("/updateUser", (req: Request, res: Response)=>{
    const {name, age }: {name: string, age: number}= req.body
    res.json(`Updated ${name} ${age}`)
})
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
    
})