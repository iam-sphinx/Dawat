import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL as string).then(() => {
  console.log("Connected to Database");
});

const app = express();
app.use(express.json());
app.use(cors());

// import routes
import userRoutes from "./routes/user.routes";

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.use("/api/user", userRoutes);

app.listen(8080, () => {
  console.log("server started on port: 8080");
});
