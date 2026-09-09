import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;

const app = express();


// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://bg-removal-kl.netlify.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "token", "Authorization"],
  })
);
await connectDB();

app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.send("API working");
});

app.use("api/user", userRouter);
app.use("api/image", imageRouter);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

export default app;
