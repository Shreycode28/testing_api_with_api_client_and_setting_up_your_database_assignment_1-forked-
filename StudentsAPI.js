const express = require('express');
const router = express.Router();

const students = [
  { "student_id": "1", "name": "Alice Johnson", "marks": { "math": 85, "science": 90, "english": 78, "history": 88, "geography": 92 }, "total": 433 },
  { "student_id": "2", "name": "Bob Smith", "marks": { "math": 80, "science": 85, "english": 78, "history": 88, "geography": 89 }, "total": 410 },
  { "student_id": "3", "name": "Charlie Davis", "marks": { "math": 90, "science": 85, "english": 80, "history": 90, "geography": 90 }, "total": 415 },
  { "student_id": "4", "name": "David Lee", "marks": { "math": 70, "science": 75, "english": 80, "history": 85, "geography": 70 }, "total": 380 }
];

// POST request handler for '/students/above-threshold'
router.post('/students/above-threshold', (req, res) => {
  const { threshold } = req.body;

  if (typeof threshold !== 'number' || threshold <= 0) {
    return res.status(400).json({ error: 'Invalid threshold value' });
  }

  const filteredStudents = students.filter(student => student.total > threshold);

  res.status(200).json({
    count: filteredStudents.length,
    students: filteredStudents.map(student => ({ name: student.name, total: student.total }))
  });
});

module.exports = router;
