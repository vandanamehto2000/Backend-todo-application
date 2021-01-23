const express = require('express')
const app = express();
const router = express.Router();
const knex = require('./connection/create_table')
const cookie=require('cookie-parser');
const sleep = require('system-sleep')

app.use(express.json());
app.use('/', router);

require('./routers/cities')(router)
require('./routers/signup')(router)
require('./routers/login')(router)
require('./routers/get')(router)
require('./routers/todo')(router)

app.listen(8000, () => {
    console.log('server started on port 8000')
})