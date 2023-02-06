const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async(req, res) => {
  // create a new tag
  try{
    const newtag=await Tag.create({
      tag_id:req.body.tag_id,
    });
    res.status(200).json(newtag);
  }
  catch(err){
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try{
    const tagdata=await Tag.destroy({
      where:{id:req.params.id,
      },
    });
    if(!tagdata)
    {
      res.status(404).json({message:'No tag found with that id!'});
      return;
    }
    res.status(200).json(tagdata);
  }
  catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
