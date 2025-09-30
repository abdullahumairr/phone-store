import express from "express";
import { testConnection } from "./config/db.js";
import useRouter from "./routes/userRoute.js";

// membuat server
const app = express();
const port = 2807;
 
app.use(useRouter);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
  testConnection();
});
