import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";


const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async (ws) => {
  const users = await client.user.findMany();
  ws.send(JSON.stringify(users));
});

console.log("WebSocket server started on ws://localhost:8080");