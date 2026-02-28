import app from "./app";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT || 5000;

// Database connection check
prisma.$connect()
    .then(() => {
        console.log("Connected to the database successfully.");
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

// IMPORTANT: Local development-e app run korar jonno
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server is running locally on port ${PORT}`);
    });
}

// Vercel er jonno export kora
export default app;