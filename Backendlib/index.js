const express = require("express");
const libModel = require("./model/booksDb");
const cors = require('cors');
const app = new express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.post('/addBooks', async(req, res) => {
    var data = await libModel(req.body);
    data.save();
    res.send({ status: "Data saved" })
})

//to view all books
app.get('/viewbooks', async(req, res) => {
    var data = await libModel.find();
    res.json(data);
})

app.get('/viewonebook', async(req, res) => {
    let id = req.body._id
    var data = await libModel.findOne(id)
    res.json(data);
})

//delete
app.delete('/deleteBooks/:id', async(req, res) => {
    console.log(req.params);
    let id = req.params.id;
    await libModel.findByIdAndDelete(id);
    res.json({ status: "deleted" })

})

//update
app.put("/edit/:id", async(req, res) => {
    let id = req.params.id;
    try {
        var data = await libModel.findByIdAndUpdate(id, req.body)
        res.json({ status: "updated" })
    } catch (err) {
        res.status(500).send(err)
    }

})

app.listen(3008, () => {
    console.log("Port 3008 is up and running");
})