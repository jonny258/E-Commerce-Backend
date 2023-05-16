const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//THIS RETURNS AN ERROR
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  })
  .then((responce) => {
    res.status(200).json(responce)
  })
  .catch((err) => res.status(404).json({err: 'an error occured GET'}))
  // find all categories
  // be sure to include its associated Products
});

//THIS RETURNS AN ERROR
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
  
  .then((responce) => {
    res.status(200).json(responce)
  })
  .catch((err) => res.status(404).json({err: 'an error occured GET/id'}))
  // find one category by its `id` value
  // be sure to include its associated Products
});

//THIS WORKS
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((responce) => {
      res.status(200).json(responce)
    })
    .catch((err) => res.status(400).json({err: 'an error occured POST'}))
  // create a new category
});

//THIS RETURNS AN ERROR
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((responce) => {
    res.status(200).json(responce)
  })
  .catch(res.status(404).json({err: 'an error occured PUT/id'}))
  // update a category by its `id` value
});

//THIS RETURNS 0
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((responce) => {
    res.status(200).json(responce)
  })
  .catch((err) => res.status(404).json(err))
  // delete a category by its `id` value
});

module.exports = router;
