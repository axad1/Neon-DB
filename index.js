const { neon } = require("@neondatabase/serverless");
const sql = neon(process.env.DATABASE_URL);
// sql`SELECT version()`
sql`SELECT * FROM playing_with_neon`
  .then((result) => {
    console.log("result=> ", result);
  })
  .catch((e) => console.log("Error", e));
