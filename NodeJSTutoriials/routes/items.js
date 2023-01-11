var express = require("express");

var router = express.Router();

router.get("/get-item", (req, res) => {
    res.send("List of items.")
})

router.get("/get-item-details", (req, res) => {
    res.send("List of specific item.")
})

router.post("/create-item", (req, res) => {
    res.send("Create item.")
})

router.put("/update-item", (req, res) => {
    res.send("Update item.")
})

router.delete("/delete-item", (req, res) => {
    res.send("Delete item.")
})

module.exports = router;