const express = require('express')
const cors = require('cors')
const courses  = require('./Courses.js')
const app = express()
const StatusCodes = {
    OK: 200,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    ERROR: 500
}

app.use(express.json())
app.use(cors())


app.get('/api/courses',(req,res)=>{
    res.status(StatusCodes.OK).json(courses)
})

app.get(`/api/course/:id`,(req,res)=>{
    let course={};
    courses.forEach(c=>{
        if(c.id===(+req.params.id)) 
            course = c
    })
    return res.status(StatusCodes.OK).json(course)
});

app.post("*", (req,res) => {
    res.send(StatusCodes.BAD_REQUEST).json({error: "Invalid Path"})
})

module.exports = app