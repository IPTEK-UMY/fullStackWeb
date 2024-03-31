const express = require("express");
const supabase = require("@supabase/supabase-js");

const app = express();
app.use(express.json());
const PORT = 3211 || process.env.PORT;

const SUPABASE_URL = "https://xbemrhwwfkgeyfalenmm.supabase.co";
const SUPABASE_SERVICE_ROLE =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiZW1yaHd3ZmtnZXlmYWxlbm1tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTg4ODU3NSwiZXhwIjoyMDI3NDY0NTc1fQ.AtZT5kxCxP4D1M4-6F55vqWjDqJQoAQQZ6AM6YLNzGA";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

app.get("/", async (request, response) => {
  const getData = await db.from("blog").select();
  response.json({getData})
});

app.post("/", async (request, response) => {
    const {title, deskripsi } = request.body
    const createPost = await db.from("blog").insert({title, deskripsi});
    console.log("🚀 ~ app.post ~ createPost:", createPost);
    response.json({createPost});
});

app.listen(PORT, () => {
  console.log("server running port", PORT);
});
