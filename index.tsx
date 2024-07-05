import {Database} from "bun:sqlite"
const db = new Database(":memory:");
const sqlconnection = db.query("select 'git it, geet it!' as message;")
const result = sqlconnection.get();
console.log('result :>>', result )

const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
});

console.log(`Listening on localhost:${server.port}`);
