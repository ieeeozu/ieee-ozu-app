import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "../src/models/index";

config({ path: ".env" });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql, schema });
