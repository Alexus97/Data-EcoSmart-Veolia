import express from 'express';
import { Sens } from '../models/sensoresModels.js';


const router = express.Router();


// Route for Save a new Book
router.post('/', async(req, res) => {
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
router.get('/', async (req, res) => {
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
});


// Route for Get ONE Sensores from database bi ID.
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;


    const sens = await Sens.findById(id);

    return res.status(200).json({ sens });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


// Route for Update a sensores
router.put('/:id', async (req, res) => {
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
});


// Route for Delete a book
router.delete('/:id', async (req, res) => {
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
});

export default router;