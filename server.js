const env = require('dotenv').config();
const serveList = require('koa-serve-list');
const serveStatic = require('koa-serve-static');
const Koa = require('koa');
const app = new Koa();

const {PORT, FILEDIR} = process.env;
app.use(serveList(FILEDIR, {}));
app.use(serveStatic(FILEDIR, {}));


app.listen(PORT);

