const express = require("express");
const app = express();
const port = 8080;
app.get("/", (req,res)=>{
    let result = {
        id:12,
        name:'User List'
    }
    res.status(200).json(result);
})

app.listen(port, () => {
    console.log("App is listening"+port);
})
