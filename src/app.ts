import express, { Application, Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
 
import { notFound } from "./middlewares/notFound";
import errorHandler from "./middlewares/globalErrorHandler";
import router from "./routes";
import { corsMiddleware } from "./config/cros";

const app: Application = express();

// --- Middlewares ---
app.use(corsMiddleware); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Auth Routes ---
app.all("/api/auth/*splat", toNodeHandler(auth));

// --- API Routes ---
app.use("/api/v1", router);

// --- Health Check ---
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to SkillBridge ",
    timestamp: new Date().toISOString(),
  });
});

// --- Global Error Handlers ---
app.use(notFound);
app.use(errorHandler);

export default app;