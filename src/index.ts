import express, { Request, Response } from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4152;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["*", "http://localhost:3000", "http://localhost:5173"],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  }),
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Trip Ami App!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
