const { Router } = require("express")

const route = Router()
route.get("/", (req, res) => {
    res.json({
        title: "post page",
        message: "All post",
        data: [null]
    })
})
route.post("/", (req, res) => {
    res.json({
        title: "post page",
        message: "Add post",
        data: [null]
    })
})
route.delete("/:id", (req, res) => {
    res.json({
        title: "post page",
        message: "Post deleted",
        id: req.params.id,
        data: [null]
    })
})
route.put("/:id", (req, res) => {
    res.json({
        title: "post page",
        message: "Post Updated",
        id: req.params.id,
        data: [null]
    })
})

module.exports = route