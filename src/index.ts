import "reflect-metadata";
import express from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import { userRouter } from "./routes/user";
import { authRouter } from "./routes/auth";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

const main = async () => {
  await createConnection();
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/auth", authRouter);
  app.listen(PORT, () =>
    console.log(`Server is listening 🚀 on Port: ${PORT}`)
  );
};

main();
