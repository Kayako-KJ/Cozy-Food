const express = require('express');
const router = express.Router();
const Recipe = require('../../models/Recipes');

//Get all
//@route GET api/recipes

router.get('/', async (req, res) => {
    Recipe.find()
    .then(recipes => res.json(recipes))
    .catch (err => res.status(404).json({ norecipesfound: 'No Recipes found' }));
});

//Get by id
//@route GET api/recipes/:id
router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(404).json({ norecipefound: 'No Recipe found'}));
});

//Add 
//@route POST api/recipes
router.post('/', (req, res) => {
    Recipe.create(req.body)
    .then(recipe => res.json({ msg: 'Recipe added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this recipe'}));
});

//Update
//@route PUT api/recipes/:id
router.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then(recipe => res.json({ msg: 'Updated successfully'}))
    .catch(err => 
        res.status(400).json({ error: 'Unable to update the Database '}));
})

//Delete
//@route DELETE api/recipes/:id
router.delete('/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
    .then(recipe => res.json({ msg: 'Recipe entry delete successfully '}))
    .catch(err => res.status(404).json({ error: 'No such recipe found'}));
});

module.exports = router;