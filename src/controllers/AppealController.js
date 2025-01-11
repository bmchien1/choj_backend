const { Appeal } = require("../models");

exports.createAppeal = async (req, res) => {
  try {
    const appeal = await Appeal.create(req.body);
    res.status(201).json(appeal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAppeals = async (req, res) => {
  try {
    const appeals = await Appeal.findAll();
    res.status(200).json(appeals);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAppealById = async (req, res) => {
  try {
    const appeal = await Appeal.findByPk(req.params.id);
    if (!appeal) {
      return res.status(404).json({ message: "Appeal not found" });
    }
    res.status(200).json(appeal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateAppeal = async (req, res) => {
  try {
    const appeal = await Appeal.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    if (!appeal[0]) {
      return res.status(404).json({ message: "Appeal not found" });
    }
    res.status(200).json(appeal[1][0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAppeal = async (req, res) => {
  try {
    const appeal = await Appeal.destroy({
      where: { id: req.params.id },
    });
    if (!appeal) {
      return res.status(404).json({ message: "Appeal not found" });
    }
    res.status(200).json({ message: "Appeal deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
