var express = require("express");

var router = express.Router();

router.get("/get-order", (req, res) => {
    res.send("List of Orders.")
})

router.get("/get-order-details", (req, res) => {
    res.send("List of specific Order.")
})

router.post("/create-order", (req, res) => {
    res.send("Create Order.")
})

router.put("/update-order", (req, res) => {
    res.send("Update Order.")
})

router.delete("/delete-order", (req, res) => {
    res.send("Delete Order.")
})

module.exports = router;