// compra.js

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const comprasSchema = new mongoose.Schema({

  buy: {
    buy_date: {
      type: Date,
      required: true
    },
    price_total: {
      type: Number,
      required: true  
    },
    payment_methods: {
      type: String, 
      required: true
    }
  },

  purchase_details: {
    quantity: {
      type: Number,
      required: true
    },
    subtotal: {
      type: Number,  
      required: true
    }
  },

  input_categories: {
    name: {
      type: String,
      required: true
    }
  },

  inputs: {
    name: {
      type: String,  
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    unit_price: {
      type: Number,
      required: true
    },
    status: {
      type: Boolean,
      required: true
    }
  },

  type: {
    type: String,
    required: true,
    enum: ['natural', 'empresa']
  },

  natural: {
    full_name: {
      type: String,
      required: function() {
        return this.type === 'natural';
      }
    },
    document: {
      type: String,
      required: function() {
        return this.type === 'natural';  
      }
    },
  },

  empresa: {
    rut: {
      type: String,
      required: function() {
        return this.type === 'empresa';
      }
    },
    legal_representative_name: {
      type: String,
      required: function() {
        return this.type === 'empresa';
      }
    }},  
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    statuspro: {
      type: Boolean,
      required: true
  }
});
const Compra = mongoose.model('Compra', comprasSchema);
module.exports = router;
    


//req: objeto de la petición
//res: objeto de la respuesta

router.post('/AgregarCompra', (req, res) => {
    const nuevacompra = new Compra({
      buy: {
        buy_date: req.body.buy_date,
        price_total: req.body.price_total,
        payment_methods: req.body.payment_methods,
      },
      purchase_details: {
        quantity: req.body.quantity,
        subtotal: req.body.subtotal,
      },
      input_categories: {
        name: req.body.input_categories.name,
      },
      inputs: {
        name: req.body.inputs.name,
        stock: req.body.inputs.stock,
        unit_price: req.body.inputs.unit_price,
        status: req.body.inputs.status,
      },
      type: req.body.type,
      natural: {
        full_name: req.body.natural.full_name,
        document: req.body.natural.document,
      },
      empresa: {
        rut: req.body.empresa.rut,
        legal_representative_name: req.body.empresa.legal_representative_name,
        },
        phone: req.body.phone,
        address: req.body.address,
        statuspro: req.body.statuspro,
      
      idcompra: req.body.idcompra,
    });
  
    nuevacompra
      .save()
      .then(() => {
        res.send('Compra agregada correctamente');
      })
      .catch((err) => {
        res.send(err);
      });
  });

//agregar usuario

  
  //get encontrar todas las compras
  router.get("/compras",  (req, res) => {
      comprasSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({message:error}));
    });
  
  
  //obtener una compra
  router.get("/compras/:id",  (req, res) => {
    const { id } = req.params;
    comprasSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
  });
  
  
  //Actualizar una compra
  router.put("/compras/:id", (req, res) => {
    const { id } = req.params;
    const updateFields = req.body;
  
    // Utiliza el modelo de Compras y su método `findOneAndUpdate`
    comprasSchema.findOneAndUpdate({ _id: id }, { $set: updateFields }, { new: true })
      .then((updatedCompra) => {
        if (!updatedCompra) {
          return res.status(404).json({ message: 'Compra no encontrada.' });
        }
        res.json({ message: 'Compra actualizada exitosamente.', data: updatedCompra });
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  });
  
  //Eliminar una compra
  router.delete("/compras/:id", (req,res)=> {
    const { id } = req.params;
    comprasSchema 
     .deleteOne({_id: id})
     .then(()=> res.json(data))
     .catch((error) => res.json({ message:error }));
  });
  
  module.exports = router;
  
  