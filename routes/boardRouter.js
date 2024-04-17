const express = require('express');
const router = express.Router();
const Board = require("../schemas/board");

router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await Board.deleteOne({
        _id: id
      });
      res.json({ message: true });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      await Board.update(
        { _id: req.body._id },
        {
          $set: {
            title: req.body.title,
            content: req.body.content
          }
        }
      );
      res.json({ message: "updated post" });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });
  
  router.post("/", (req, res) => {
    const board = new Board({
      writer: req.body._id,
      title: req.body.title,
      content: req.body.content
    });
    board.save();
    res.json({message: "working!"});
  }
);
  
//get all
  router.get("/", async (req, res) => {
    try {
      const _id = req.body._id;
      const board = await Board.find({ writer: _id }, null, {
        sort: { createdAt: -1 }
      });
      res.json({ list: board });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });
//get one  
  router.get("/:id", async (req, res) => {
    try {
      // const _id = req.body._id;
      const { id }  = req.params;
      const board = await Board.find({ _id: id });
      res.json({ board });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });
  

module.exports = router;