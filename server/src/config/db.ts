import "@std/dotenv/load"
import { MongoClient } from "npm:mongodb@5.6.0";

// Load environment variables
const mongoUrl = Deno.env.get("MONGO_URL");
if (!mongoUrl) {
  throw new Error("Please define MONGO_URL in your environment variables");
}

const client = new MongoClient(mongoUrl);
await client.connect();
console.log("Connected to MongoDB");
const db = client.db(Deno.env.get("DB_NAME"));

export default db;
