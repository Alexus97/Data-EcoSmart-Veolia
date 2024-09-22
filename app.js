import express from 'express';  // libreria exprees.
import {PORT, mongoDBURL} from './config.js'; // traer base de datos y puerto desde config.js.
import mongoose from 'mongoose'; // usamos biblioteca mongoose para trabajar con la bdt.
import { Sens } from './models/sensoresModels.js'; // importamos el modelo de sensores.
import sensoresRoute from './routes/sensoresRoute.js'

const app = express();


//Middleware for parsing request body
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Welcome To Data Eco Smart Veolia');
});

app.use('/sensores',  sensoresRoute);
/*
// Route for Save a new Book
app.post('/sensores', async(req, res) => {
  try {
    if(
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear
    ) {
      return res.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }
    const newSens = { // varible para crear un nuevo libro.
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear
    };

    const sens = await Sens.create(newSens);

    return res.status(201).send(sens);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({message: error.message});
  }
});

// Route for Get All Sensores from database.
app.get('/sensores', async (req, res) => {
  try {
    const sens = await Sens.find({});

    return res.status(200).json({
      count: sens.length,
      data: sens
    });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
})


// Route for Get ONE Sensores from database bi ID.
app.get('/sensores/:id', async (req, res) => {
  try {
    const { id } = req.params;


    const sens = await Sens.findById(id);

    return res.status(200).json({ sens });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
})


// Route for Update a sensores
app.put('/sensores/:id', async (req, res) => {
  try {
    if(
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear
    ){
      return res.status(400).send({
        message: 'Send all required fields : title, author, publisherYear',
      });
    }

    const { id } = req.params;


    const result  = await Sens.findByIdAndUpdate(id, req.body);

    if(!result) {
      return res.status(400).json({ message: 'Sensor not found'});
    }

    return res.status(200).send({ message: 'Sensor update successfully'});
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
})


// Route for Delete a book
app.delete('/sensores/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result  = await Sens.findByIdAndDelete(id);

    if(!result) {
      return res.status(400).json({ message: 'Sensor not found'});
    }

    return res.status(200).send({ message: 'Sensor Delete successfully'});
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
})
*/


mongoose // importamos mongoose.
  .connect(mongoDBURL) // conectamos bdt.
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => { //el servido exprees se conectara solo, si la conexion a mi BDT es exitosa.
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
