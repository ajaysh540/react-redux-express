const app = require('./index')
const PORT  = process.env.PORT || 3002

app.listen(PORT, error => {
    console.log(PORT)
    if(error) return console.erorr('Something went wrong')
    console.log(`Started on PORT ${PORT}`)
}) 

