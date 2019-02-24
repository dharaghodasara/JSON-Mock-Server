const server = require('json-server');
const data = require('./data')
const router = server.router(data);

router.render = (req,res) => {
    
    
    // wrap response with extra fields.
    res.jsonp({
        success : true,
        data:res.locals.data
    })

    
}

module.exports = router;