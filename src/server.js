import express from "express";
import { testConnection } from "./config/db.js";
import useRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import cors from "cors";
import authRouter from "./routes/authRoute.js";

// membuat server
const app = express();
const port = 2807;

app.use(cors());

app.use(express.json());
app.use(authRouter);
app.use(useRouter);
app.use(productRouter); 

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
  testConnection();
});
