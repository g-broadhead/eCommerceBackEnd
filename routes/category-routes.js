const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', async function (req, res)  {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({ include: [Product] })
  res.json(categories)
})

router.get('/categories/:id', async function ({ params: { id } }, res)  {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categories = await Category.findOne({ where: { id }, include: [Product] })
  res.json(categories)
})

router.post('/categories', async function (req, res) {
  // create a new category
  const categories = await Category.create(req.body)
  res.status(200).json(categories)
})

router.put('/categories/:id', async function (req, res) {
  // update a category by its `id` value
  const categories = await Category.update(req.body, { where: { id:req.params.id} })
  res.status(200).json(categories)
})

router.delete('/categories/:id', async function ({ params: { id } }, res) {
  // delete a category by its `id` value
  const categories = await Category.destroy({ where: { id } })
  res.status(200).json(categories)
})

module.exports = router
