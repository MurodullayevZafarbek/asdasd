const { Router } = require("express")

const route = Router()

route.get("/", (req, res) => {
    res.json({
        title: "Main page",
        message: "Hello express!",
        moreData: '/more'
    })
})
route.get("/more", (req, res) => {
    res.json({
        title: "More page",
        message: "Welcome More!",
        data: [
            {
                route: "users",
                routes: [
                    {
                        method: "GET",
                        path: "/users",
                        data: "All users"
                    },
                    {
                        method: "POST",
                        path: "/users",
                        data: "Users add"
                    },
                    {
                        method: "DELETE",
                        path: "/users",
                        data: "Users DElete"
                    }
                ]
            },
            {
                route: "posts",
                routes: [
                    {
                        method: "GET",
                        path: "/posts",
                        data: "All posts"
                    },
                    {
                        method: "POST",
                        path: "/posts",
                        data: "posts add"
                    },
                    {
                        method: "DELETE",
                        path: "/posts",
                        data: "posts DElete"
                    }
                ]
            }
        ]
    })
})

module.exports = route