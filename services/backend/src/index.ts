import express, { Application, Response, Request } from "express";

const app: Application = express();

app.use(express.json());

const port = 5050;

app.get("/", (request: Request, response: Response) => {
    response.json({ message: "OK" });
});

app.listen(port, () => {
    console.log(`Listening and serving on :5050`);
}).on("error", (error: unknown) => {
    console.log(error);
    process.exit(1);
});