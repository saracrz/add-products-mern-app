const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/add-products", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(() => console.log('connected to DB')).catch(console.error());

const Product = require('./models/Product');

app.get('/products', async (req, res) => {
    const products = await Product.find();

    res.json(products);
});

app.post('/product/new', async (req, res) => {
    const product = new Product({
        text: req.body.text
    });

    product.save();
    res.json(product);
});

app.delete('/product/delete/:id', async (req, res) => {
    const result = await Product.findByIdAndDelete(req.params.id);

    res.json(result);
})

app.listen(3001, () => console.log('Server started on port 3001'))
