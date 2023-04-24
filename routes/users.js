const { Router } = require("express")
const route = Router()

route.get("/", (req, res) => {
    res.json({
        title: "Users page",
        message: "All users",
        data: [null]
    })
})
route.get("/:id", (req, res) => {
    res.json({
        title: "Users page",
        message: "One users",
        id: req.params.id,
        data: null
    })
})
route.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        title: "Users page",
        message: "Add user",
        data: [null]
    })
})
route.delete("/:id", (req, res) => {
    res.json({
        title: "Users page",
        message: "User deleted",
        id: req.params.id,
        data: [null]
    })
})
route.put("/:id", (req, res) => {
    res.json({
        title: "Users page",
        message: "User Updated",
        id: req.params.id,
        data: [null]
    })
})

module.exports = route