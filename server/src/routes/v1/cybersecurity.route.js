const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const cybersecurityValidation = require('../../validations/cybersecurity.validation');
const cybersecurityController = require('../../controllers/cybersecurity.controller');

const router = express.Router();
router
  .route('/:userid/:key')
  .get(validate(cybersecurityValidation.addVisit), cybersecurityController.addVisit)

router
  .route('/visits')
  .get(auth(), cybersecurityController.getVisits)
  
router
  .route('/charts')
  .get(auth(), cybersecurityController.getVisitDashboard)

router
  .route('/chainlink')
  .post(auth(), validate(cybersecurityValidation.testChainLink), cybersecurityController.testChainLink)

router
  .route('/')
  .get(validate(cybersecurityValidation.checkipfingerprint), cybersecurityController.checkipfingerprint)
module.exports = router;