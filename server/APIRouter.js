import express from 'express';
const router = express.Router();

// Middleware that is specific to this router
router.use((req, res, next) => {
  console.info(`API request: [${Date.now()}] -> ${req.url}`);
  next();
});

router.get('/todos', (req, res) => {
  res.status(200).json({
    todos: [
      {
        name: 'Karate - Dodo',
        desc: 'Провери кога са тренировките.'
      },
      {
        name: 'React.js',
        desc: 'Work on React'
      },
      {
        name: 'Work on JS',
        desc: 'JS Ninja + You don\'t know JS'
      }
    ]
  })
});

module.exports = router;
