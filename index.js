import connectDb from "./config/db.js";
import app from "./app.js";
import {createServer } from 'http';
import config from "./config/config.js";
import userService from "./services/user.service.js";
async function main(){
await connectDb()
const server =createServer(app);

//await userService.register('s@s','happy','happy1')
server.listen(config.port,()=>{
    console.log(`${config.env} server listening on port ${config.port}`)
})
}

main().catch(err=>console.error(err));



