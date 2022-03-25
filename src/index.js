const app = require("./app")

const connect = require("./configs/db")


app.listen(4000, async () => {
    await connect();
    console.log("Sever running successfully")
})