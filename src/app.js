import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { Api } from "./api";

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(helmet());
app.use(process.env.PRODUCTION ? morgan("combined") : morgan("dev"));
app.get("/", Api);
app.get("/authority", (req, res) => {
  res.render("jaebongbangchim.html");
});

export default app;
