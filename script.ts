import express from 'express'
import { PrismaClient } from "@prisma/client";

const app = express()
app.use(express.json());

const prisma = new PrismaClient();

app.post("/", async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await prisma.user.create({
        data: {
            username: username,
            password: password,
        },
    });
});

app.get("/", async (req: Request, res: Response) => { });

app.put("/", (req: Request, res: Response) => { });

app.delete("/:id", (req: Request, res: Response) => { });


app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
})
