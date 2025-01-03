import app from "./app.js";
import { connectDB } from "./config/db.js";
import { backendPort } from "./secret/secret.js";

app.listen(backendPort, async () => {
  console.log("Server is running on: http://localhost:" + backendPort);
  await connectDB();
});
