const express = require("express");
const Task = require("../models/task");
const router = new express.Router();

const validateTask = (req, res, next) => {
  if (!req.body.title || !req.body.email) {
    return res.status(400).send({ error: "Title and Email are required" });
  }
  next();
};

router.post("/tasks", validateTask, async (req, res) => {
  const task = new Task({
    ...req.body,
  });

  try {
    await task.save();
    res.status(201).send({ task });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.get("/tasks/:email", async (req, res) => {
  try {
    const tasks = await Task.find({ email: req.params.email });
    res.status(200).send({ tasks });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

router.patch("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id },
      { status: true },
      { new: true }
    );

    if (!task) {
      return res.status(404).send({ error: "Task not found" });
    }

    res.status(200).send({ task });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
    });

    if (!task) {
      return res.status(404).send({ error: "Task not found" });
    }

    res.status(200).send({ task });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

module.exports = router;
