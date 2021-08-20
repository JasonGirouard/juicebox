const express = require('express');
const { getAllTags } = require('../db');
const tagsRouter = express.Router();

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");
  next(); // THIS IS DIFFERENT
});

tagsRouter.get('/', async (req, res) => {
    const posts = await getAllTags();
  
    res.send({
      posts
    });
  });

module.exports = tagsRouter;