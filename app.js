import express, { json } from "express"
import cors from "cors"
import { userRouter } from "./routes/user.js"

const app = express()
app.use(json())
app.use(cors())

const PORT = process.env.PORT ?? 3000 

app.use("/api", userRouter)

app.listen(PORT, () => {
    console.log(`App escuchando en el puerto ${PORT}`)
})