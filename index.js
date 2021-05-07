const express = require("express");
const server = express();
const { PORT } =  require('./config');
const { HomeRoutes, QuoteRoutes } = require('./routes');

const { NotFoundMiddleware } = require('./middlewares');


server.use(express.static('./public'));
server.use(express.json());
server.use("/", HomeRoutes);
server.use("/", QuoteRoutes);
server.use(NotFoundMiddleware)

server.listen(PORT, () =>{
  console.log(`Application running on PORT ${PORT}`)
});

