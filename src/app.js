import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { Api } from "./api";

const app = express();

app.use(helmet());
app.use(process.env.PRODUCTION ? morgan("combined") : morgan("dev"));
app.get("/", Api);

export default app;
