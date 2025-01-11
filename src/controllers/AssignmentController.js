const { Assignment } = require("../models");

exports.createAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.create(req.body);
    res.status(201).json(assignment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.findAll();
    res.status(200).json(assignments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAssignmentById = async (req, res) => {
  try {
    const assignment = await Assignment.findByPk(req.params.id);
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.status(200).json(assignment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    if (!assignment[0]) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.status(200).json(assignment[1][0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.destroy({
      where: { id: req.params.id },
    });
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.status(200).json({ message: "Assignment deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
