import express, { Application, Response, Request } from "express";

const app: Application = express();

const port = 5050;

app.get("/", (request: Request, response: Response) => {
    response.send("OK");
});

app.listen(port, () => {
    console.log(`Listening and serving on :5050`);
});