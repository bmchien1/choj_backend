const { Test } = require("../models");

exports.createTest = async (req, res) => {
  try {
    const test = await Test.create(req.body);
    res.status(201).json(test);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTests = async (req, res) => {
  try {
    const tests = await Test.findAll();
    res.status(200).json(tests);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTestById = async (req, res) => {
  try {
    const test = await Test.findByPk(req.params.id);
    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }
    res.status(200).json(test);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTest = async (req, res) => {
  try {
    const test = await Test.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    if (!test[0]) {
      return res.status(404).json({ message: "Test not found" });
    }
    res.status(200).json(test[1][0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTest = async (req, res) => {
  try {
    const test = await Test.destroy({
      where: { id: req.params.id },
    });
    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }
    res.status(200).json({ message: "Test deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
