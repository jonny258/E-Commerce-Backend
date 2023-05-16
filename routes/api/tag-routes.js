const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


//THIS RETURNS AN ERROR
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
  .then((responce) => {
    res.status(200).json(responce)
  })
  .catch((err) => res.status(404).json({err: 'an error occured GET'}))
  // find all tags
  // be sure to include its associated Product data
});

//THIS RETURNS AN ERROR
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product, ProductTag]
  })
  .then((responce) => {
    res.status(200).json(responce)
  })
  .catch((err) => res.status(404).json({err: 'an error occured GET/id'}))

  // find a single tag by its `id`
  // be sure to include its associated Product data
});


//THIS WORKS
router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((responce) => {
    res.status(200).json(responce)
  })
  .catch((err) => res.status(500).json({err: 'an error occured POST'}))

  // create a new tag
});

//THIS RETURNS 0
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((responce) => {
    res.status(200).json(responce)
  })
  .catch((err) => res.status(500).json({err: 'an error occured POST'}))
  // update a tag's name by its `id` value
});


//THIS RETURNS 0
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((responce) => {
    res.status(200).json(responce)
  })
  .catch((err) => res.status(500).json({err: 'an error occured POST'}))
  // delete on tag by its `id` value
});

module.exports = router;
