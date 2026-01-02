import express from 'express';
import products from './data/products.js'
const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
    res.send("hello world")
})

//fetch data from product
app.get('/products', (req, res) => {
    res.send(products);
});

//fetch data from product id
app.get('/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.send(product);

})

app.listen(PORT, () => {
    console.log("server is runnign on port", PORT);

})