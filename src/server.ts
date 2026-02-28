import app from "./app";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT || 5000;

// Database connection check
prisma.$connect()
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Database connection error:", err));

// Local-e run korar jonno (Vercel-e eta bypass hobe)
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server is running locally on port ${PORT}`);
    });
}

export default app; // Vercel er jonno eta oboshsoi dorkar