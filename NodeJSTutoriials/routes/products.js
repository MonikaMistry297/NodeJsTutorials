var express = require("express");

var router = express.Router();

router.get("/product-details", (req, res) => {
    res.send("Get Request for specific user");
})

router.post("/create-product", (req, res) => {
    res.send("Create Product");
})

router.put("/update-product", (req, res) => {
    res.send("Update Product");
})

router.delete("/delete-product", (req, res) => {
    res.send("Delete Product]");
})

module.exports = router;