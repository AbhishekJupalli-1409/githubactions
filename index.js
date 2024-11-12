const express = require('express')
const app = express()
app.listen(3000, () => {
    console.log("listening on port 3000");
})

app.get('/actions', (req, res) => {
    res.send('hello from actions');
})


