const express = require('express')
const router = express.Router(); 

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaventa = new eschema({
    shipping_cost: {type: Float32Array, require: true},
    total_sale: {type: Float32Array, require: true},
    document: {type: String, require: true},
    address: {type: String, require: true},
    city: {type: String, require: true},
    phone: {type: String, require: true},
    order_status: {type: String, require: true},
    Method_payment: {type: String, require: true},
    date_order: {type: Date, require: true},
    deliver_date: {type: Date, require: true},
    order_cost: {type: String, require: true},
    amount: {type: Int32Array, require: true},
    unit_price: {type: Float32Array, require: true},
    subtotal: {type: Float32Array, require: true},
    name: {type: String, require: true},
    size: {type: String, require: true},
    color: {type: String, require: true},
    photo: {type: String, require: true},
    sale_price: {type: Float32Array, require: true},
    idsale: String
})

const ModeloVenta = mongoose.model('venta', eschemaventa)
module.exports = router;

/* prueba
router.get('/ejemplo', (req,res) => {
    res.end('cargando');
});*/

//agregar usuario
router.post('/Agregarventa', (req,res) => {
    const nuevaventa = new ModeloVenta({
        shipping_cost: req.body.shipping_cost,
        total_sale: req.body.total_sale,
        document: req.body.document,
        address: req.body.address,
        city: req.body.city,
        phone: req.body.phone,
        order_status: req.body.order_status,
        Method_payment: req.body.Method_payment,
        date_order: req.body.date_order,
        deliver_date: req.body.deliver_date,
        order_cost: req.body.order_cost,
        amount: req.body.amount,
        unit_price: req.body.unit_price,
        subtotal: req.body.subtotal,
        name: req.body.name,
        size: req.body.size,
        color: req.body.color,
        photo: req.body.photo,
        sale_price: req.body.sale_price,
        idsale: req.body.idsale
    })
    nuevaventa.save()
    .then(() => {
        res.send('Venta agregada correctamente');
    })
    .catch(err => {
        res.send(err);
    });
} )
//obetener todos los usuario
router.get('/obtenerventas', (req, res) => {
    ModeloVenta.find({})
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            res.send(err);
        });
});

//obetener data de usuario
router.post('/obtenerdataventa', (req, res) => {
    ModeloVenta.find({idsale:req.body.idsale})
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            res.send(err);
        });
});

//actualizar usuaio
router.post('/actualizaventa', (req, res) => {
    ModeloVenta.findOneAndUpdate({idsale:req.body.idsale}, {
        $set:{
            shipping_cost: req.body.shipping_cost,
        total_sale: req.body.total_sale,
        document: req.body.document,
        address: req.body.address,
        city: req.body.city,
        phone: req.body.phone,
        order_status: req.body.order_status,
        Method_payment: req.body.Method_payment,
        date_order: req.body.date_order,
        deliver_date: req.body.deliver_date,
        order_cost: req.body.order_cost,
        amount: req.body.amount,
        unit_price: req.body.unit_price,
        subtotal: req.body.subtotal,
        name: req.body.name,
        size: req.body.size,
        color: req.body.color,
        photo: req.body.photo,
        sale_price: req.body.sale_price,
        idsale: req.body.idsale}
    })
        .then(docs => {
            res.send('venta actualizada');
        })
        .catch(err => {
            res.send(err);
        });
});


router.post('/borrarventa', async (req, res) => {
    try {
        const deletedVenta = await ModeloVenta.findOneAndDelete({ idsale: req.body.idsale});
        if (deletedUser) {
            res.send('Venta eliminada');
        } else {
            res.status(404).send('Venta no encontrada');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});
    