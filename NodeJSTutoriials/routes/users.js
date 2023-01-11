var express = require("express");

var router = express.Router();

// for middleware
router.use("/", (req, res, next) => {
    console.log("API call received.");
    next();
})


router.get("/user-details", (req, res) => {
    res.send("Get Request for specific user");
})

router.post("/create-user", (req, res) => {
    res.send("Create USer");
})

router.put("/update-user", (req, res) => {
    res.send("Update USer");
})

router.delete("/delete-user", (req, res) => {
    res.send("Delete USer");
})

// request number in url and show data that data in response
router.get("/search/:key([0-9]{4})", (req,res) => {

    res.send("Searching Requested data is" +req.params.key);
    
})

// request alphabetic in url and show that data in response
router.get("/search-username/:key([a-zA-Z]{4})", (req,res) => {

    res.send("Searching Requested data is " +req.params.key);
    
})

// where does not match your req
router.post("*", (req,res) => {

    var resObj = {
        statusCode: 404,
        statusMsg: "URL not found." 
    }

    res.send(resObj)
})




module.exports = router;