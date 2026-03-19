const express = require("express");
const axios = require("axios");

const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.render("form");
});

app.post("/submit", async (req,res)=>{
    try{
        const response = await axios.post("http://backend:5000/submit",{
            name:req.body.name,
            email:req.body.email
        });
        res.send(response.data.message);
    }catch(err){
        res.send("Error submitting form");
    }
});

app.listen(3000, ()=>{
    console.log("Frontend running on port 3000");
});
