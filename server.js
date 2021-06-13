const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('hvdb.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(port,()=>{
    console.log(`servidor corriendo en http://localhost:${port}`);
});