const server = require('json-server');
const data = require('./data')
const router = server.router(data);

router.render = (req,res) => {

    //Throw error if required field name is not present. 
    if (req.method === 'POST' && !req.body.name) {
            res.status(400).jsonp({
                success : false,
                error: "Employee name is required."
              })
    }
    else{
        // wrap response with extra fields.
        res.jsonp({
            success : true,
            total : res.locals.data.length,
            data:res.locals.data
        })
    }
    
}

module.exports = router;