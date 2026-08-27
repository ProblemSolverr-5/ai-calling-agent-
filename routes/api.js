const express = require('express');
const router = express.Router();
const { processHeavyData } = require('../controllers/customLogic');

// n8n se aane wala data handle karne ke liye endpoint
router.post('/process-data', (req, res) => {
  try {
    const incomingData = req.body;

    // Custom logic function ko call karna
    const result = processHeavyData(incomingData);

    // n8n ko filtered/processed data wapas bhejna
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
