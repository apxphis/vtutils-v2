import dotenv from "dotenv"
import { Client } from "discord.js"

dotenv.config()

const TOKEN = process.env.TOKEN

console.log("bot is starting...");

const client = new Client({
    intents: []
});

console.log(client);