const { Router } = require('express');
const router = Router();

const Product = require('../models/Product');

router.get('/', async (req, res) => {
    const products = await Product.find().lean();
    res.render('articulos', {products});
});

router.get('/articulos/add', async (req,res) => {
    res.render('articulos_form');
});

router.post('/articulos/add', (req,res) => {
    const {description, price, stock} = req.body;
    const newProduct = new Product({
        description,
        price,
        stock
    });
    newProduct.save();
    res.redirect('/');
});

router.get('/articulos/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/');
});

router.get('/articulos/edit/:id', async (req, res) => {
    const { id } = req.params;
    var product = [];
    const data = await Product.findById(id).lean();
    product = data;
    console.log(product);
    res.render('articulos_edit_form', {product});
});

router.post('/articulos/edit', async (req, res) => {
    const { _id, description, price, stock } = req.body;
    let datos = {
        description,
        price,
        stock
    };
    await Product.findByIdAndUpdate(_id, datos)
    res.redirect('/');
});

module.exports = router;