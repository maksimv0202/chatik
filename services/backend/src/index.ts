import cors from "cors";
import express, { Application, Request } from "express";
import helmet from "helmet";
import morgan from "morgan";

import routes from "./routes";

const app: Application = express();

app.use(cors<Request>());
app.use(helmet());
app.use(express.json());
app.use(morgan("combined"));
app.disable("etag");

const port = 5050;

app.use("/", routes);

app.listen(port, () => {
    console.log(`Listening and serving on :5050`);
});