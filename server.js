const projectData= {};
const weatherData = [];
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
app.use(express.static('Website'));

const port = 8000;
const server = app.listen(port, listening);


function listening(){
    console.log(`The server is running locally on port:${port}`);
};

//Get Request
app.get('/getProjectData', function(req,res){
    res.send(projectData);
})

//Post Data 
app.post('/postWeatherData',function(req, res){
    const data = request.body;
    const newEntry ={
        name: req.body.name,
        temp: req.body.temp,
        desc: req.body.desc,
        feelings: req.body.feelings,
        date: req.body.date,
        time: req.body.time
    }
    weatherData.push(newEntry);
    res.send(weatherData);
});

