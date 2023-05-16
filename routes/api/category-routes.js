const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint




router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  })
  .then((responce) => {
    res.status(200).json(responce)
  })
  .catch((err) => res.status(404).json(err))
});


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
  .catch((err) => res.status(404).json(err))
});


router.post('/', (req, res) => {
  Category.create(req.body)
    .then((responce) => {
      res.status(200).json(responce)
    })
    .catch((err) => res.status(400).json(err))
});


router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((responce) => {
    res.status(200).json(responce)
  })
  .catch((err) => res.status(400).json(err))
});


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
});

module.exports = router;
