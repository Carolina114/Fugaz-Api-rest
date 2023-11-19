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
    idsale: mongoose.isObjectIdOrHexString()
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
        name_rol: req.body.name_rol,
        state_rol: req.body.state_rol,
        name_permission: req.body.name_permission,
        name_user: req.body.name_user,
        email: req.body.email,
        password: req.body.password,
        state_user: req.body.state_user,
        date_register: req.body.date_register,
        iduser: req.body.iduser
    })
    nuevousuario.save()
    .then(() => {
        res.send('Usuario agregado correctamente');
    })
    .catch(err => {
        res.send(err);
    });
} )
//obetener todos los usuario
router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find({})
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            res.send(err);
        });
});

//obetener data de usuario
router.post('/obtenerdatausuario', (req, res) => {
    ModeloUsuario.find({iduser:req.body.iduser})
        .then(docs => {
            res.send(docs);
        })
        .catch(err => {
            res.send(err);
        });
});

//actualizar usuaio
router.post('/actualizausuario', (req, res) => {
    ModeloUsuario.findOneAndUpdate({iduser:req.body.iduser}, {
        name_rol: req.body.name_rol,
        state_rol: req.body.state_rol,
        name_permission: req.body.name_permission,
        name_user: req.body.name_user,
        email: req.body.email,
        password: req.body.password,
        state_user: req.body.state_user,
        date_register: req.body.date_register,
        iduser: req.body.iduser
    })
        .then(docs => {
            res.send('usuario actualizado');
        })
        .catch(err => {
            res.send(err);
        });
});


router.post('/borrarusuario', async (req, res) => {
    try {
        const deletedUser = await ModeloUsuario.findOneAndDelete({ iduser: req.body.iduser });
        if (deletedUser) {
            res.send('Venta eliminada');
        } else {
            res.status(404).send('Venta no encontrada');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});
    