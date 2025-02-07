import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { useExpressServer } from "routing-controllers";
import path from "path";

const app: Application = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("combined"));
app.disable("etag");

useExpressServer(app, {
	controllers: [path.join(__dirname + "/controllers/*.[jt]s")],
	cors: true,
	routePrefix: "/v1"
});

const port = 5050;

app.listen(port, () => {
    console.log(`Listening and serving on :5050`);
});