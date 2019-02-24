const jsonServer = require('json-server');
const server = jsonServer.create();

const empRouter = require('./Employee')
const deptRouter = require('./Department')

const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);

// 1 sec delay in each response.
server.use((req,res,next)=>{setTimeout(next,1000)});

server.use(jsonServer.rewriter({
    '/departments*': '/dept/departments$1',
    '/employees?:key%3E=:value' : '/emp/employees?$1_gte=$2', // e.g age >= 45 to age_gte=45
    '/employees*': '/emp/employees$1'
}));

//Create a router per module
server.use("/emp",empRouter);
server.use("/dept",deptRouter);

console.log("Server started on port : "+port);

server.listen(port);
